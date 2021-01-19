import React from 'react';
import ReactDOM from 'react-dom';

//Main Page
import App from './App';

//SW
// import * as serviceWorker from '';
import reportWebVitals from './reportWebVitals';

//Styles Global
import './global/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// serviceWorker.unregister();
