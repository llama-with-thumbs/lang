import React from 'react';
// import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="pages">
      <Link className="page" to="/">
        Main
      </Link>
      <Link className="page" to="/">
        Team
      </Link>
      <Link className="page" to="/">
        Games
      </Link>
      <Link className="page" to="/">
        Dictionary
      </Link>
      <Link className="page" to="/">
        Statistics
      </Link>
    </div>
    <div className="action-items">
      <Button className="login-button" variant="contained" color="primary">
        Login
      </Button>
    </div>
  </header>
);

export default Header;
