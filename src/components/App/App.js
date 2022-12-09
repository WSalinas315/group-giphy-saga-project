// React imports
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Component imports
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import Header from '../Header/Header';

import './App.css'

function App(props) {
  return (
    <div>
      
      <Router>
      <Header />
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Router>

    </div>
  );
}

export default App;