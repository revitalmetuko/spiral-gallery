import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // אם יש לך קובץ CSS כללי לפרויקט

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
