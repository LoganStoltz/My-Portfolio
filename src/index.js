// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Main App component that contains all routes and components
import './styles/global.css'; // Import global styles
import './styles/variables.css'; // Import CSS variables

// Render the application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Assumes there is a <div id="root"></div> in your index.html
);
