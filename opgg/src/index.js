import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {stopReportingRuntimeErrors} from 'react-error-overlay'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
        api_key = "RGAPI-4469b964-7b92-46c3-8c95-4d84d2c1ee9f"
    />
  </React.StrictMode>
);
