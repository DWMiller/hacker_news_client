import React from 'react';
import { Router } from '@reach/router';

import ScreensStories from 'screens/Stories';
import ScreensComments from 'screens/Comments';
import ScreensStory from 'screens/Story';
import ContactScreen from 'screens/Contact';

export const ScreensRoot = () => (
  <Router>
    <ScreensStories type="top" path="/" />

    <ScreensStories exact path="/stories/:type" />

    <ScreensStory path="/story/:item" />

    <ScreensComments path="/comment/:item" />

    <ContactScreen path="/contact" />
  </Router>
);
