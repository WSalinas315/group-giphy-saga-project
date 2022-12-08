import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';

function* rootSaga() {

}

const searchResults = (state = [], action) => {
  switch(action.type) {
    case 'SET_SEARCH_RESULTS': return action.payload;
    case 'CLEAR_SEARCH_RESULTS': return [];
    default: return state;
  }
}



const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore({}, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
