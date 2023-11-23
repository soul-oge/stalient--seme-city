import React from 'react';
import { Link } from "react-router-dom";
import "./question-preview.css"
import { DataView } from 'primereact/dataview';
import { Description } from '@mui/icons-material';

function Questionnaire_preview({ id, data }) {
    let { Titre, description} = data;
  
    if (!Titre) Titre = "Non titré";
    if (!description) description = "Pas de description fournie";
    return (
      <div className="container">
      <article className="quiz-preview">
        <h3 className="quiz-preview-title">{Titre}</h3>
        <p className="quiz-preview-description">{description}</p>
        <Link to={`start_qcm/${id}`} >
          <button className="quiz-preview_play">commencez</button>
        </Link>
      </article>
      </div>
    );
}
export default Questionnaire_preview; 