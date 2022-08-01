import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/**
 * Instructions :
 *  - Replace hard coded table by call to ProductService
 *  - Track every time Select button is pressed on any line
 *  - Display selected product
 */
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
