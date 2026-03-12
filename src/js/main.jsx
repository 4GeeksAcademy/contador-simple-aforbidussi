import React from 'react'
import ReactDOM from 'react-dom/client'
import SecondsCounter from './components/secondscounter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
    counter++;

root.render(
      <React.StrictMode>
        <SecondsCounter seconds={counter} />
      </React.StrictMode>
    );
}, 1000);
