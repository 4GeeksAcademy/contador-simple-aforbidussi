import React from 'react'
import ReactDOM from 'react-dom/client'
import ContadorNuevo from './components/contadornuevo';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
    counter++;

root.render(
      <React.StrictMode>
<ContadorNuevo/>
      </React.StrictMode>
    );
}, 1000);

