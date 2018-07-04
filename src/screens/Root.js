import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import withItem from 'utils/withItem';

import ScreensStories from 'screens/Stories/Stories';
import ScreensComments from 'screens/Comments/Comments';
import ScreensStory from 'screens/Story/Story';
import ContactScreen from 'screens/Contact';

const ScreensStoryWithItem = withItem(ScreensStory);

export default class componentName extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/stories/:type" component={ScreensStories} />
        <Route
          path="/story/:id"
          render={({ match }) => (
            <ScreensStoryWithItem item={parseInt(match.params.id, 10)} />
          )}
        />
        <Route
          path="/comment/:id"
          render={({ match }) => (
            <ScreensComments item={parseInt(match.params.id, 10)} />
          )}
        />
        <Route path="/contact" component={ContactScreen} />
        <Redirect from="*" to="/stories/top" />
      </Switch>
    );
  }
}
