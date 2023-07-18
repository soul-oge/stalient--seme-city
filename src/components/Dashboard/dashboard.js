import React, { useState, useEffect } from 'react';
import {db} from "../../config/firebase"
import {collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const snapshot = await getDocs(collection(db, "users"));;
        // const usersSnapshot = await firestore.collection('users').get();
  
        const usersData = snapshot.docs.map(doc => {
            const userData = doc.data();
            const scores = Object.entries(userData.all_score).map(([category, score]) => ({
              category,
              score
            }));
            userData.scores = scores;
            return userData;
          });
          setUsers(usersData);
        };
      fetchData();
    }, []);
  
return (
  <div>
  <h1>Tableau de bord</h1>
  <div className="grid grid-cols-3 gap-4">
    {users.map(user => (
      <a
        key={user.email}
        href={`/users/${user.email}`} // ou tout autre lien que tu veux utiliser pour afficher les détails de l'utilisateur
        className="border p-4 rounded-lg hover:bg-gray-100"
      >
        <h2 className="font-bold text-lg">{user.Name}</h2>
        <ul>
          {user.scores.map(score => (
            <li key={score.category}>
              <span className="font-semibold">{score.category}: </span>
              <span>{score.score}</span>
            </li>
          ))}
        </ul>
      </a>
    ))}
  </div>
</div>
);
}
  
export default Dashboard;