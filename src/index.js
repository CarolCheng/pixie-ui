import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 引入 App 組件


// Exporting the font family and font weight constants as macros. These allow users to choose fonts and weights in a structured and manageable way.
export { FontFamilies } from './constants/fontFamilies';  // Provides a list of available font families as macros
export { FontWeights } from './constants/fontWeights';  // Provides a list of available font weights as macros

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
