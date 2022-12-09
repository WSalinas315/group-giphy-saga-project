import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

import './index.css'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';

function* rootSaga() {
  yield takeEvery('FETCH_SEARCH_RESULTS', fetchSearchResults)
  yield takeEvery('FETCH_FAVORITES', fetchFavorites)
  yield takeEvery('ADD_TO_FAVORITES', addToFavorites)
}

// POST favorite to the favorites array
function* addToFavorites(action){
  try {
    yield axios.post('/api/favorite', action.payload)
    yield put({type: 'FETCH_FAVORITES'}) //do we want this? We aren't on the same page, and if we move over to the favorites page, it will load them anyway
  } catch (error) {
    alert('error adding to favorites')
    console.log(err);
  }
}


// get search results from API
function* fetchSearchResults(action) {
  try {
    const searchResults = yield axios.get('/api/search/' + action.payload)
    console.log(searchResults)
    yield put({ type: 'SET_SEARCH_RESULTS', payload: searchResults.data.data })
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

// search results reducer
const searchResults = (state = [], action) => {
  switch(action.type) {
    case 'SET_SEARCH_RESULTS': return action.payload;
    case 'CLEAR_SEARCH_RESULTS': return [];
    default: return state;
  }
}

// favorite GIFs reducer
const favoriteGifs = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES': return action.payload;
    default: return state;
  }
}

// Boilerplate for Redux store & Sagas
const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ searchResults, favoriteGifs })
const reduxStore = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga)

ReactDOM.render(
<Provider store={reduxStore}>
  <App />
</Provider>
, document.getElementById('root'));
