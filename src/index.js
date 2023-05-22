import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{}}>
    <BrowserRouter>

         <App />
    </BrowserRouter>
    </div>
 
);


