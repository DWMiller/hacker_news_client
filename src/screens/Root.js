import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import ScreensStories from 'screens/Stories';
import ScreensComments from 'screens/Comments';
import ScreensStory from 'screens/Story';
import ContactScreen from 'screens/Contact';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Page = styled.div``;

export const ScreensRoot = () => (
  <Router>
    <Header />
    <Page>
      <Switch>
        <Route exact path="/stories/:type">
          <ScreensStories />
        </Route>
        <Route path="/story/:item">
          <ScreensStory />
        </Route>
        <Route path="/comment/:item">
          <ScreensComments />
        </Route>
        <Route path="/contact">
          <ContactScreen />
        </Route>
        <Redirect from="/" to="/stories/top" />
      </Switch>
    </Page>
    <Footer />
  </Router>
);
