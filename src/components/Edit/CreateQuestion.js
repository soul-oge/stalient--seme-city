import React, { useState } from 'react';
//import { db } from './firebase'; // Assurez-vous d'importer correctement votre configuration Firebase

function CreateQuestion() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([{ text: '', points: 0 }]);
  const [subSession, setSubSession] = useState('');
  const [coefficient, setCoefficient] = useState(1);

  const handleCreateQuestion = () => {
    // Créez un objet pour représenter la question
    const newQuestion = {
      question,
      answers,
      subSession,
      coefficient,
    };

    // Enregistrez la nouvelle question dans Firebase
    // db.collection('quizzes').doc('votre-quiz-id').collection('questions').add(newQuestion)
    //   .then(() => {
    //     // La question a été ajoutée avec succès
    //     console.log('Question ajoutée avec succès !');
    //   })
    //   .catch((error) => {
    //     // Gérez les erreurs d'ajout de question
    //     console.error('Erreur lors de l\'ajout de la question :', error);
    //   });
  };

  const handleAddAnswer = () => {
    // Ajoutez une nouvelle réponse vide à la liste
    const newAnswers = [...answers, { text: '', points: 0 }];
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>Créer une question</h1>
      <label>Question:</label>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />

      <label>Réponses:</label>
      {answers.map((answer, index) => (
        <div key={index}>
          <input
            type="text"
            value={answer.text}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[index].text = e.target.value;
              setAnswers(newAnswers);
            }}
          />
          <input
            type="number"
            value={answer.points}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[index].points = Number(e.target.value);
              setAnswers(newAnswers);
            }}
          />
        </div>
      ))}

      <label>Sous-session:</label>
      <input type="text" value={subSession} onChange={(e) => setSubSession(e.target.value)} />

      <label>Coefficient:</label>
      <input type="number" value={coefficient} onChange={(e) => setCoefficient(Number(e.target.value))} />

      <button onClick={handleAddAnswer}>Ajouter une réponse</button>
      <button onClick={handleCreateQuestion}>Ajouter la question</button>
    </div>
  );
}

export default CreateQuestion;
