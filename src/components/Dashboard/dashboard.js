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
            const scores = Object.entries(userData.all_score).map(([category, data]) => {
              const totalScore = data.total_score || 0; // Si total_score n'existe pas, utilisez 0 par défaut
              return {
                category,
                totalScore,
              };
            });
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
        className="border p-4 rounded-lg hover:bg-gray-100"
      >
        <h2 className="font-bold text-lg">{user.Name}</h2>
        <ul>
          {user.scores.map(score => (
            <li key={score.category}>
              <span className="font-semibold">{score.category}: </span>
              <span>{score.totalScore}</span>
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