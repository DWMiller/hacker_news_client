import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { ScreensRoot } from 'screens/Root';

const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  green: '#4a913c',
  shadow: 'rgba(0,0,0,0.3) 1px 1px 3px 0px;',
};

const AppWrapper = styled.div`
  position: relative;
  margin: 1em;
  max-width: 800px;
  padding-bottom: 0;

  @media (min-width: 800px) {
    margin: 1em auto;
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: url('../assets/sayagata-400px.png');
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${theme.black};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: serif;
  }

  a {
    color: ${theme.green};
    white-space: nowrap;
  }

  .loading {
    padding: 1em;
    margin-bottom: 1em;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <GlobalStyles />

          <ScreensRoot />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
