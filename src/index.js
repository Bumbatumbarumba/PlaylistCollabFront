import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import middleware from './utils/Middleware'

const store = configureStore({
  reducer: rootReducer,
  //middleware: applyMiddleware(...middleware)
})

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

