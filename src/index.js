import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
//import loadSampleData from "./data/load_data.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
);
//loadSampleData();