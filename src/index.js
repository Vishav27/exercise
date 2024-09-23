import React from "react";
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Correctly use createRoot here
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render your app within the BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

