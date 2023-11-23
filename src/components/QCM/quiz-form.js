import React from 'react';
import "./quest.css"
import { useState } from "react";
import { Checkbox } from 'primereact/checkbox';
import useUserInternal from "../Auth/authDetails"
import { InputText } from 'primereact/inputtext';
import {db} from "../../config/firebase"
import { doc,updateDoc} from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
 
function EndScreen({score, titre, data} ) {

  const {user} = UserAuth();

  const updateUserData = async () => {
    try {
      const docRef = doc(db, 'users', user.uid);
      let totalMaxScore = 0;
      for (const questionKey in data) {
        totalMaxScore += data[questionKey].maxScore;
      }

      // Update user data with totalMaxScore
      await updateDoc(docRef, {
        [`all_score.${titre}`]: data,
        [`all_score.${titre}.total_score`]: score,
        [`all_score.${titre}.total_maxScore`]: totalMaxScore,
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour des données de l\'utilisateur :', error);
    }
  }

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1>{titre} completé</h1>
      <div className="">
        <div className="text-2xl font-bold py-4">{user.uid}</div>
        <div className="text-2xl font-bold py-4">score</div>
        <div className="text-2xl font-bold py-4">{score}</div>
        <Link to ="/quest">
          <button className='border px-6 py-2 my-4'> go to quiz </button>
        </Link>
        <button className='border px-6 py-2 my-4'onClick={updateUserData}>Soumettre les résultats</button>
      </div>
    </div>
  )
}
  

function QuestForm({ quizData }) {
    const [gameState, setGameState] = useState({
      score: 0,
      triviaIndex: 0,
      state: "start",
      startTime: performance.now(),
    });
    const [answersData, setAnswersData] = useState({});
    const questions = quizData.questions ?? [];
    const { score, triviaIndex, state,} = gameState;
    const loadNextQuestion = (score1, answer, coefficient, sous_categorie, maxScore) => {
      if (triviaIndex >= questions.length - 1) {
        setGameState({ ...gameState, state: "end" , score: score + (score1*coefficient)});
      } else {
        setGameState({ ...gameState, state: "running", triviaIndex: triviaIndex + 1, score: score + (score1*coefficient),});
      }
      setAnswersData({
        ...answersData,
        [`question${triviaIndex}`]: {
          answer,
          score: score1,
          coefficient,
          sous_categorie,
          maxScore,
        },
      });
    };
    let pageContent;
    if (state === "end") {
      pageContent = (
        <EndScreen
          score={score}
          titre={quizData.Titre}
          data = {answersData}
        />
      );
    } else {
    const triviaQuestion = questions[triviaIndex];
    const question = triviaQuestion;
    const answers = triviaQuestion.answers;
    pageContent = (
    <TriviaItem
          key={triviaIndex}
          question={question}
          allAnswers={answers}
          onNextClick={(score1, answer, coefficient, sous_categorie, maxScore) => loadNextQuestion(score1, answer, coefficient, sous_categorie, maxScore)}
    />
    );
    }
  
    return (
        pageContent
    );
  }
function TriviaItem({ allAnswers, question, onNextClick }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [selectedScore, setSelectedScore] = useState(null);
    const [selectedCoefficient, setSelectedCoefficient] = useState(null);
    const [selectedSousCategorie, setSelectedSousCategorie] = useState(null);
    const [maxScore, setMaxScore] = useState(null);

    const handleAnswerSelect = (answer, score, Coefficient, SousCategorie) => {
      setSelectedAnswer(answer)
      setSelectedScore(score);
      setSelectedCoefficient(Coefficient);
      setSelectedSousCategorie(SousCategorie);
      let temp = question.coefficient * allAnswers.length;
      setMaxScore(temp);
    };
    const handleSubmit = () => {
      onNextClick(selectedScore, selectedAnswer, selectedCoefficient,selectedSousCategorie, maxScore);
    };
    const [value, setValue] = useState("");

    const renderQuestionFields = (question) => {
      if (question.type === 'choix-multiple') {
        return (
          <div className='mx-64 my-12'>
          <ul className="flex flex-col gap-3">
            {allAnswers.map((option, index) => {
            const inputId = `question-${index}`;
            return (
              <div key={index} className="flex items-center mb-2 mr-2">
              <input
                type="radio"
                id={inputId}
                name="reponse"
                value={option.text}
                checked={selectedAnswer === option.text}
                onChange={() => handleAnswerSelect(option.text, option.score, question.coefficient, question.sous_categorie)}
                className="flex-shrink-0"
              />
              <label className="ml-2 flex-grow"  htmlFor={inputId}>{option.text}</label>
            </div>
            );
          })}
        </ul>
        </div>
        )}
  
      if (question.type === 'champs-reponse') {
        return( <span className="p-input-icon-left flex justify-center">
                <InputText className="p-inputtext-lg" placeholder=""  value={value} onChange={(e) => setValue(e.target.value)}/>
               </span>)
      }
  
      if (question.type === 'multiple-reponse') {
        return (
          <div className='justify-center'>
            {allAnswers.map((option, index) => {
              return( 
             <div key={index} className="flex items-center mb-2 mr-2">
               <Checkbox inputId={`question-${index}`}
                  value={option} 
                  name={`question-${index}`}
                  onChange={() => handleAnswerSelect(option.text, option.score, question.coefficient, question.sous_categorie)}
                  />
               <label htmlFor={`question-${index}`} className="ml-2">{option.text}</label>
             </div>
        )})}
          </div>
        );
      }
      return null;
    };
    return (
      <div>
        <p className="trivia-item__question">{question.question}</p>
        {renderQuestionFields(question, maxScore)}
        <button className= "trivia-item__button trivia-item__next-button" onClick={handleSubmit}>
          suivant ➡
        </button>
      </div>
    );
  }

export default QuestForm; 