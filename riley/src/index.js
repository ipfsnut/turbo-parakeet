/**
 * The entry point of the React application. This file sets up the React root and renders the main App component.
 * 
 * The file imports necessary dependencies, configures the environment variables using `react-dotenv`, and renders the
 * `<App />` component within a `<React.StrictMode>` wrapper.
 * 
 * The `reportWebVitals` function is also imported and can be used to measure performance metrics of the application.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
