import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot function  
import './index.css'; // Your CSS file  
import RouterConfig from './config/router/index';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' exists in your HTML  

// Render the RouterConfig wrapped in StrictMode  
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterConfig /> {/* Render your router here */}
    </Provider>
  </React.StrictMode>
);
