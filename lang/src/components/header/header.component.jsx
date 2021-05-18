import React from 'react';
// import { AppBar, Toolbar } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

import Button from '../button/button.component';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/lang/main">
      <Logo className="logo" />
    </Link>
    <div className="pages">
      <Link className="page" to="/lang/main">
        Main
      </Link>
      <Link className="page" to="/lang/team">
        Team
      </Link>
      <Link className="page" to="/lang/games">
        Games
      </Link>
      <Link className="page" to="/lang/dictionary">
        Dictionary
      </Link>
      <Link className="page" to="/lang/statistics">
        Statistics
      </Link>
    </div>
    <div className="action-items">
      <Button className="login-button dark" variant="contained">
        Login
      </Button>
    </div>
  </header>
);

export default Header;
