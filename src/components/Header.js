import React, { Component } from 'react';
import styled from 'styled-components';
import {FaHackerNews} from 'react-icons/fa';

import { NavLink } from 'components/NavLink';

const HeaderWrapper = styled.header`
  margin-bottom: 0.5em;
  font-size: 1.5em;

  a {
    margin-right: 1em;
  }

  a.active {
    color: black;
    text-decoration: none;
  }
`;

const HackerNewsLink = styled.a`
  margin-right: 0.5em;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HackerNewsLink href="//news.ycombinator.com/">
          <FaHackerNews />
        </HackerNewsLink>
        <span>Stories - </span>
        <NavLink to="/stories/best">Best</NavLink>
        <NavLink to="/stories/new">New</NavLink>
        <NavLink to="/stories/top">Top</NavLink>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {};

export default Header;
