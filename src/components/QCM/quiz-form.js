import React from 'react';
import "./quest.css"
import { useState } from "react";
import { Checkbox } from 'primereact/checkbox';
import useUserInternal from "../Auth/authDetails"
import { InputText } from 'primereact/inputtext';
import {db} from "../../config/firebase"
import { doc,updateDoc} from "firebase/firestore";

 
function EndScreen({score, titre} ) {
  const currentUser = useUserInternal();
  const setData = async() => {
    try {
        const docRef = doc(db, "users", currentUser.userId);
        if(titre === "Développement commercial"){ 
          await updateDoc(docRef, {
           "all_score.Développement commercial": score
        });}
       
      else if(titre ===  "R&D et Innovation"){
        await updateDoc(docRef, {
          "all_score.R&D et Innovation": score
        });
      }
      else if(titre ===   "Internatonal"){
        await updateDoc(docRef, {
          "all_score.Internatonal": score
        });
      }
     
      else if(titre ===  "Organisation et exploitation"){
        await updateDoc(docRef, {
          "all_score.Organisation et exploitation": score
        });
      }
    
      else if(titre ===  "Capital humain"){
        await updateDoc(docRef, {
          "all_score.Capital humain": score
        });
      }
  
      else if(titre === "Financement"){ 
        await updateDoc(docRef, {
          "all_score.Financement": score
      });}

      else if(titre === "Business model"){
        await updateDoc(docRef, {
          "all_score.Business model": score
        });
      }
    } catch(error){
        console.error(error);
    }
}
setData();
  return (
    <div className="">
      <h1>QCM completed</h1>
      <div className="end-screen__stat">
      <div className="end-screen__stat-label">{currentUser.userId}</div>
      <div className="end-screen__stat-label">score</div>
      <div className="end-screen__stat-value">{score}</div>
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
    const [previousAnswers, setPreviousAnswers] = useState({});
    const questions = quizData.questions ?? [];
    const { score, triviaIndex, state,} = gameState;
    const loadNextQuestion = (score1, answer) => {
      setPreviousAnswers({ ...previousAnswers, [triviaIndex]: answer });
      if (triviaIndex >= questions.length - 1) {
        setGameState({ ...gameState, state: "end" , score: score + score1}); 
      } else {
        // Using the spread operator to copy the gameState and override the triviaIndex.
        setGameState({ ...gameState, state: "running", triviaIndex: triviaIndex + 1, score: score + score1,});
      }
    };
    let pageContent;
    if (state === "end") {
      pageContent = (
        <EndScreen
          score={score}
          titre={quizData.Catégories}
        />
      );
    } else {
      if(previousAnswers[triviaIndex-1] === "0") {
        setGameState({ ...gameState, triviaIndex: triviaIndex +1})
      }
    const triviaQuestion = questions[triviaIndex];
    const question = triviaQuestion;
    const answers = Object.keys(triviaQuestion)
    .filter((key) => (key !== 'question'&&key !== 'type'))
    .map((key) => triviaQuestion[key]);
    pageContent = (
    <TriviaItem
          key={triviaIndex}
          question={question}
          allAnswers={answers}
          onNextClick={(score, answer) => loadNextQuestion(score, answer)}
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
  
    const handleAnswerSelect = (answer, score) => {
      setSelectedAnswer(answer);
      setSelectedScore(score);
    };
    const handleSubmit = () => {
      onNextClick(selectedScore, selectedAnswer);
    };
    const [value, setValue] = useState("");

    const renderQuestionFields = (question) => {
      if (question.type === 'choix-multiple') {
        return (
          <ul className="flex justify-center flex-col gap-3">
            {allAnswers.map((option, index) => {
            const inputId = `question-${index}`;
            return (
              <div key={index} className="flex items-center mb-2 mr-2">
              <input
                type="radio"
                id={inputId}
                name="answer"
                value={option.text}
                checked={selectedAnswer === option.text}
                onChange={() => handleAnswerSelect(option.text, option.score)}
                className="flex-shrink-0"
              />
              <label className="ml-2 flex-grow"  htmlFor={inputId}>{option.text}</label>
            </div>
            );
          })}
        </ul>
        )}
  
      if (question.type === 'champs-reponse') {
        return( <span className="p-input-icon-left flex justify-center">
                <InputText className="p-inputtext-lg" placeholder=""  value={value} onChange={(e) => setValue(e.target.value)}/>
               </span>)
      }
  
      if (question.type === 'multiple-reponses') {
        return (
          <div className='justify-center'>
            {allAnswers.map((option, index) => {
              return( 
             <div key={index} className="flex items-center mb-2 mr-2">
               <Checkbox inputId={`question-${index}`}
                  value={option} 
                  name={`question-${index}`} 
                  />
               <label htmlFor={`question-${index}`} className="ml-2">{option.text}</label>
             </div>
        )})}
          </div>
        );
      }
  
      return null; // Gestion des types de questions inconnus ou non pris en charge
    };
    
    return (
      <div>
        <p className="trivia-item__question">{question.question}</p>
        {renderQuestionFields(question)}
        <button className= "trivia-item__button trivia-item__next-button" onClick={handleSubmit}>
          Next ➡
        </button>
      </div>
    );
  }

export default QuestForm; 