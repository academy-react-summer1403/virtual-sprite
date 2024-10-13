import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot function  
import './index.css'; // Your CSS file  
import RouterConfig from './config/router/index';


const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' exists in your HTML  

// Render the RouterConfig wrapped in StrictMode  
root.render(
  <React.StrictMode>
    <RouterConfig /> {/* Render your router here */}
  </React.StrictMode>
);