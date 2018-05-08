import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span>Stories - </span>
        <NavLink to="/stories/best">Best</NavLink>
        <NavLink to="/stories/new">New</NavLink>
        <NavLink to="/stories/top">Top</NavLink>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
