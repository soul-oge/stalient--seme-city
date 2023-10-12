import React from 'react';
import LoadingSpinner from '../utile/loading-spinner';
import ErrorMessage from '../utile/error-message';
import useQuestionOnce from '../../data/hooks/use-question-once';
import Questionnaire_preview from "./question-preview"


function Questionnaires(){
    const questions = useQuestionOnce();

    if(questions.status === 'loading') return(<LoadingSpinner/>)
    if(questions.status === 'error') return (<ErrorMessage>something went wrong</ErrorMessage>)
    return (
        <ul>
            <li className='mx-8 font-bold text-lg'> catégorie</li>
            {
                questions.result.map((quest) =>
                (
                    <li>
                    <Questionnaire_preview id= {quest.id} data={quest.data}/>
                    </li>
                ))}
        </ul>
    );
};

export default Questionnaires;