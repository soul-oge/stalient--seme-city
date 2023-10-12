import React from 'react';
import Questionnaires from './questions'
import AuthenticatedNavbar from "./../navbarConnected"

const Questionnaires_page = () => {
    return (
      <main>
      <AuthenticatedNavbar/>
        <Questionnaires/>  
      </main>
    );
};

export default Questionnaires_page;