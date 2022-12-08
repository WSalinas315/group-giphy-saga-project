import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';



ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
