import React from 'react';
import LoadingSpinner from '../utile/loading-spinner';
import ErrorMessage from '../utile/error-message';
import useQuestionOnce from '../../data/hooks/use-question-once';
import Questionnaire_preview from "./question-preview"
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from "react-router-dom";
library.add(faPlusCircle);

function Questionnaires(){
    const questions = useQuestionOnce();

    if(questions.status === 'loading') return(<LoadingSpinner/>)
    if(questions.status === 'error') return (<ErrorMessage>Quelque chose c'est mal passé</ErrorMessage>)
    return (
        <div className="">
        <ul>
            <li className='mx-8 font-bold text-lg'>Catégories</li>
            {
                questions.result.map((quest) =>
                (
                    <li>
                    <Questionnaire_preview id= {quest.id} data={quest.data}/>
                    </li>
                ))}
            <li className='flex flex-col items-center justify-center'>
                <Link to="edit_qcm/new">
                    <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded-full flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPlusCircle} className="text-lg" />
                        Ajouter un nouveau questionnaire
                    </button>
                </Link>
            </li>
        </ul>
        </div>
    );
};

export default Questionnaires;