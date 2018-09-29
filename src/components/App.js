import React, { Component } from 'react';
import styled from 'styled-components';

import { ScreensRoot } from 'screens/Root';
import Header from './Header';
import Footer from './Footer';

const AppWrapper = styled.div`
  position: relative;
  margin: 1em;
  max-width: 800px;
  padding-bottom: 0;

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
          <ScreensRoot />
        </Page>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
