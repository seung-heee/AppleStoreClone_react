import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from 'clayful/client-js';

import axios from 'axios';
import './css/auth.css';

clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU5YjhmZWYxODg4ZWY0NjliZWFhY2FmZDBkNDY1MTMxOGYwMTI0YTk2ODAwMzI4ZWQzNjk5MTQ4Mjg3OGViZWMiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjc3NTcyMTc5LCJzdG9yZSI6IkhWNzJEQU5SWjJIWS5NSlZVQ0JaVUNSOFciLCJzdWIiOiJRNkwzNUtUNUtSQ1gifQ.hs-WRUhA-1yBxoV-n7vqjqtnPPzjDf6ZvptiyZ-gm_4'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
