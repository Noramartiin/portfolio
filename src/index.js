import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import First from './pages/First'

ReactDOM.render(
  <BrowserRouter>
    {location.pathname == "/" ? <First /> : <App />}
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
