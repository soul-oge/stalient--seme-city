import React, { useState, useEffect } from 'react';
import {db} from "../../config/firebase"
import {collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        const usersData = snapshot.docs.map(doc => {
            const userData = doc.data();
            const userId = doc.id;
            const scores = Object.entries(userData.all_score).map(([category, data]) => {
              let percentage;
              if(data.total_score && data.total_maxScore) {
                percentage = (data.total_score/data.total_maxScore)*100;
              } else {
                percentage = 0;
              }
              return {
                category,
                percentage
              };
            });
            userData.scores = scores;
            userData.id = userId; 
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
      href={`/admin/${user.id}`} 
        key={user.email}
        className="border p-4 rounded-lg hover:bg-gray-100"
      >
        <h2 className="font-bold text-lg">{user.Name}</h2>
        <ul>
          {user.scores.map(score => (
            <li key={score.category}>
              <span className="font-semibold">{score.category}: </span>
              <span>{score.percentage.toFixed(2)}%</span>
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