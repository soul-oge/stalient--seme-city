import {useParams} from "react-router-dom";
import useQuestOnce from "../../data/hooks/use-quest-once";
import LoadingSpinner from '../utile/loading-spinner';
import ErrorMessage from '../utile/error-message';
import {db} from "../../config/firebase"
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // Assurez-vous d'importer les modules Firestore nécessaires

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
        for (const category in userData.all_score) {
          userData.total_score += userData.all_score[category].categoryScore;
        }
        userData.subcategoryScores = {};
        for (const category in userData.all_score) {
          for (const questionKey in userData.all_score[category]) {
            const question = userData.all_score[category][questionKey];
            const subcategory = question.sous_categorie;
            if (!userData.subcategoryScores[subcategory]) {
              userData.subcategoryScores[subcategory] = 0;
            }
            userData.subcategoryScores[subcategory] += question.score * question.coefficient;
          }
        }
        setUserData(userData);
      } else {
        console.log('Document de l\'utilisateur non trouvé.');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Nom de l'utilisateur : {userData.Name}</h1>
          <p>Score total : {userData.total_score}</p>
          <h2>Scores par catégorie :</h2>
          <ul>
            {Object.entries(userData.all_score).map(([category, data]) => (
              <li key={category}>
                {category}: {data.categoryScore}
              </li>
            ))}
          </ul>
          <h2>Somme par sous-catégorie :</h2>
          <ul>
            {Object.entries(userData.subcategoryScores).map(([subcategory, score]) => (
              <li key={subcategory}>
                {subcategory}: {score}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default UserDetail;