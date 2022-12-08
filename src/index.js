import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';

function* rootSaga() {
  yield takeEvery('FETCH_SEARCH_RESULTS', fetchSearchResults)
  yield takeEvery('FETCH_FAVORITES', fetchFavorites)
}

// get search results from API
function* fetchSearchResults(action) {
  try {
    const searchResults = yield axios.get('/api/search')
    yield put({ type: 'SET_SEARCH_RESULTS', payload: searchResults })
  } catch (err) {
    alert('Error getting search results.')
    console.log(err);
  }
}

// get favorites from database
function* fetchFavorites(action) {
  try {
    const favorites = yield axios.get('/api/favorite')
    yield put({ type: 'SET_FAVORITES', payload: favorites })
  } catch (err) {
    alert('Error getting favorites.')
    console.log(err)
  }
}

const searchResults = (state = [], action) => {
  switch(action.type) {
    case 'SET_SEARCH_RESULTS': return action.payload;
    case 'CLEAR_SEARCH_RESULTS': return [];
    default: return state;
  }
}

const favoriteGifs = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES': return action.payload;
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
