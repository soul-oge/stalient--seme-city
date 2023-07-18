import React from 'react';
import { Link } from "react-router-dom";
import "./question-preview.css"
import { DataView } from 'primereact/dataview';

function Questionnaire_preview({ id, data }) {
    let { Titre, Catégories} = data;
  
    if (!Titre) Titre = "Untitled";
    if (!Catégories) Catégories = "No description provided.";
    return (
      <div className="container">
      <article className="quiz-preview">
        <h3 className="quiz-preview-title">{Titre}</h3>
        <p className="quiz-preview-description">{Catégories}</p>
        <Link to={`start_qcm/${id}`} >
          <button className="quiz-preview_play">Start</button>
        </Link>
      </article>
      </div>
    );
}
export default Questionnaire_preview; 