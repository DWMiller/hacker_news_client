import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends PureComponent {
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
