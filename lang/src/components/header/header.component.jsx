import React from 'react';
// import { AppBar, Toolbar } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import LoginMenu from '../login-menu/login-menu.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/lang/">
      <Logo className="logo" />
    </Link>
    <div className="pages">
      <Link className="page" to="/lang/parallax">
        Parallax
      </Link>
      <Link className="page" to="/lang/">
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
      <LoginMenu />
    </div>
  </header>
);

export default Header;
