import React, { Component } from 'react';
import styled from 'styled-components';

import { NavLink } from 'components/NavLink';

import { Button } from './Button';

const FooterContainer = styled.div`
  height: 40px;
  max-width: 800px;
  position: sticky;
  display: flex;
  bottom: 0;
  align-items: center;
  padding: 0 1rem;
  z-index: 4;
  margin-top: 1rem;
`;

const ButtonAsLink = Button.withComponent(NavLink);

const FooterLink = styled(ButtonAsLink)`
  flex: 0;
  text-decoration: none;
`;

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterLink to={'/contact'}>Contact</FooterLink>
      </FooterContainer>
    );
  }
}

export default Footer;
