import React from 'react';
import { Link } from "react-router-dom";
import "./question-preview.css"
import { DataView } from 'primereact/dataview';
import { Description } from '@mui/icons-material';
import { UserAuth } from './../../context/AuthContext';

function Questionnaire_preview({ id, data }) {
    let { Titre, description} = data;
    const { user, role , loading} = UserAuth();
    if (!Titre) Titre = "Non titré";
    if (!description) description = "Pas de description fournie";
    const isAdmin = role === 'admin';
    
    return (
      <div className="container">
      <article className="quiz-preview">
        <h3 className="quiz-preview-title">{Titre}</h3>
        <p className="quiz-preview-description">{description}</p>
        <div className="quiz-buttons-container">
          <Link to={`start_qcm/${id}`}>
            <button className="quiz-preview_play">Commencez</button>
          </Link>

          {isAdmin && (
            <Link to={`edit_qcm/${id}`}>
              <button className="quiz-preview_edit">Modifiez</button>
            </Link>
          )}
        </div>
      </article>
      </div>
    );
}
export default Questionnaire_preview; 