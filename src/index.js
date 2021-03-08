import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ItemProvider } from "./context/items";

ReactDOM.render(
  
  <ItemProvider>
    <link type="text/css" rel="stylesheet" href="./index.css"></link>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ItemProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
