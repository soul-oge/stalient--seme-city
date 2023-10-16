import React from 'react';
import "./quest.css"
import { useState } from "react";
import { Checkbox } from 'primereact/checkbox';
import useUserInternal from "../Auth/authDetails"
import { InputText } from 'primereact/inputtext';
import {db} from "../../config/firebase"
import { doc,updateDoc, addDoc} from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
 
function EndScreen({score, titre, data} ) {

  //console.log(titre);
  const {user} = UserAuth();
  console.log(data);
  const setData = async() => {
    try {
        let chaine = `all_score.${titre}`;
        const docRef = doc(db, "users", user.uid);
        //await addDoc(docRef, {titre : data})

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
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1>{titre} completé</h1>
      <div className="">
        <div className="text-2xl font-bold py-4">{user.uid}</div>
        <div className="text-2xl font-bold py-4">score</div>
        <div className="text-2xl font-bold py-4">{score}</div>
        <Link to ="/quest">
          <button className='border px-6 py-2 my-4'> go to quiz </button>
        </Link>
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
    const loadNextQuestion = (score1, answer, coefficient, sous_categorie) => {
      if (triviaIndex >= questions.length - 1) {
        setGameState({ ...gameState, state: "end" , score: score + score1});
      } else {
        setGameState({ ...gameState, state: "running", triviaIndex: triviaIndex + 1, score: score + score1,});
      }
      setAnswersData({
        ...answersData,
        [`question${triviaIndex}`]: {
          answer,
          score: score1,
          coefficient,
          sous_categorie,
        },
      });
    };
    let pageContent;
    if (state === "end") {
      pageContent = (
        <EndScreen
          score={score}
          titre={quizData.Catégories}
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
          onNextClick={(score1, answer, coefficient, sous_categorie) => loadNextQuestion(score1, answer, coefficient, sous_categorie)}
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

    const handleAnswerSelect = (answer, score, Coefficient, SousCategorie) => {
      setSelectedAnswer(answer)
      setSelectedScore(score);
      setSelectedCoefficient(Coefficient);
      setSelectedSousCategorie(SousCategorie);
    };
    const handleSubmit = () => {
      onNextClick(selectedScore, selectedAnswer, selectedCoefficient,selectedSousCategorie);
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
                name="answer"
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
        {renderQuestionFields(question)}
        <button className= "trivia-item__button trivia-item__next-button" onClick={handleSubmit}>
          Next ➡
        </button>
      </div>
    );
  }

export default QuestForm; 