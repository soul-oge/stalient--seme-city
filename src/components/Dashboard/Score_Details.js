import {useParams} from "react-router-dom";
import {db} from "../../config/firebase"
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // Assurez-vous d'importer les modules Firestore nécessaires
import { Progress } from 'flowbite-react';

const UserDetail = () => {
   const {userId} = useParams();
   const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const ref = doc(db, "users", userId);
        const userDoc = await getDoc(ref);
      if (userDoc.exists()) {
        const userData = userDoc.data();

        userData.total_score = 0;
        const maxScorelist = {};
        for (const category in userData.all_score) {
          if (!maxScorelist[category]) {
            maxScorelist[category] = {};
          }
          for (const questionKey in userData.all_score[category]) {
            const question = userData.all_score[category][questionKey];
            const subcategory = question.sous_categorie;
            if(subcategory === null  || subcategory === undefined) {
              continue;
            }
            if (!maxScorelist[category][subcategory]) {
              maxScorelist[category][subcategory] = 0;
            }
          if(question.maxScore) {
            maxScorelist[category][subcategory] += question.maxScore;
          }
        }
      }
      userData.subcategoryScores = {};
      userData.categoryScores = {};
      for (const category in userData.all_score) {
        if (!userData.categoryScores[category]) {
          userData.categoryScores[category] = {};
        }
        for (const questionKey in userData.all_score[category]) {
          const question = userData.all_score[category][questionKey];
          const subcategory = question.sous_categorie;
          if(subcategory === null  || subcategory === undefined) {
            continue;
          }
          if (!userData.categoryScores[category][subcategory]) {
            userData.categoryScores[category][subcategory] = 0;
          }
          userData.categoryScores[category][subcategory] += ((question.score * question.coefficient) / (maxScorelist[category][subcategory])) *100;
        }
      }
      userData.categoryPercentage = {}
      for (const category in userData.all_score) {
        let categoryPercentage = 0;
        const subcategories = Object.keys(userData.categoryScores[category]);
        for (const subcategory in userData.categoryScores[category]) {
          if(userData.categoryScores[category][subcategory])
            categoryPercentage += userData.categoryScores[category][subcategory];
        }
        if (subcategories.length > 0) {
          categoryPercentage = categoryPercentage / (subcategories.length);
        }
        userData.categoryPercentage[category] = categoryPercentage;
      }  
      setUserData(userData);
      } else {
        console.log('Document de l\'utilisateur non trouvé.');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      {userData ? (
        <div className="bg-white rounded p-4 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Nom de l'utilisateur : {userData.Name}</h1>
          <h2 className="text-lg mt-4 mb-2">Scores par catégorie :</h2>
          <ul>
            {Object.entries(userData.all_score).map(([category, data]) => (
              <li key={category} className="mb-2">
                <span className="font-bold">{category}:</span> {userData.categoryPercentage[category].toFixed(2)}%
                <h3 className="text-md mt-2 mb-1">Sous-catégories :</h3>
                <ul>
                  {Object.entries(userData.categoryScores[category]).map(([subcategory, score]) => (
                    <li key={subcategory} className="mb-1">
                      <span className="font-semibold">{subcategory}:</span> {score.toFixed(2)}%
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-xl">Chargement en cours...</p>
      )}
    </div>
  );  
};

export default UserDetail;