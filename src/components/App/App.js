import React, { Component } from 'react';
import styled from 'styled-components';

import ScreensRooot from 'screens/Root';
import Header from 'components/Header/Header';
import Footer from 'components/Footer';

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
          <ScreensRooot />
        </Page>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
