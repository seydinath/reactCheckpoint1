import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export { default as Name } from './Name';
export { default as Price } from './Price';
export { default as Description } from './Description';
export { default as Image } from './Image';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
