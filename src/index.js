import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './Context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider >
);
