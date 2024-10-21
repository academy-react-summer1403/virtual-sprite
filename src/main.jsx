import React from 'react';
import ReactDOM from 'react-dom/client';
import {Router} from './config/router/index.jsx';
import { RouterProvider } from 'react-router-dom';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)

