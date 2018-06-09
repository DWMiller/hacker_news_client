import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';

import ScreensRooot from '../../screens/Root';

const AppWrapper = styled.div`
  margin: 1em;
  max-width: 800px;

  @media (min-width: 800px) {
    margin: 1em auto;
  }
`;

const Page = styled.div``;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Page>
          <ScreensRooot />
        </Page>
      </AppWrapper>
    );
  }
}

export default App;
