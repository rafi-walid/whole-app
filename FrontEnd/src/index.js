import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Component/App.jsx';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './features/toggleSlice.jsx';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import selectedOptionReducer from './features/selectedOptionSlice.jsx';
import attributesSelectedReducer  from './features/attributesSelectedSlice.jsx';
import dataReducer from './features/dataSlice.jsx'
import attributesReducer  from './features/attributesSlice.jsx'
const store = configureStore({
  reducer : {
    toggle: toggleReducer,
    selectedOption: selectedOptionReducer,
    attributesSelected: attributesSelectedReducer,
    data: dataReducer,
    attributes: attributesReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
