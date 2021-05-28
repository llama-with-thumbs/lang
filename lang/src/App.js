import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './styles/colors.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Parallax from './pages/parallax/parallax.component';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/lang' component={HomePage} />
        <Route exact path='/lang/parallax' component={Parallax} />
      </Switch>
    </div>
  );
}

export default App;