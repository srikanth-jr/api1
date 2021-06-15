/*
    Bootstrap & Font-Awesome CSS Files

 */
import '@fortawesome/fontawesome-free/css/all.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import './styles.css'; // customized bootstrap styles

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // customized React Application styles
import App from './App';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
