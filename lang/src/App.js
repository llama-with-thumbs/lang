import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './styles/colors.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/lang' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;