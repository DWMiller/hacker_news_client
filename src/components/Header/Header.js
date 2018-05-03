import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/">Stories</NavLink>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
