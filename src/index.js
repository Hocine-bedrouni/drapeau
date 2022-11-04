import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/style.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <div className='my-8'>
    <h1 className="text-8xl text-center ">ALLO-MOVIE</h1>
    <App />
    </div>
  </React.StrictMode>
);

