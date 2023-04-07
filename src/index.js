import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from './features/user';
import  Changetheme from "./features/theme"
import { Provider } from 'react-redux';

  const store = configureStore({
    reducer:{
      user:userReducer,
      theme:Changetheme
    }
  })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

