import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import withItem from '../../helpers/withItem';

import Header from '../Header/Header';

import StoriesContainer from '../Stories/StoriesContainer';

import StoryPage from '../StoryPage/StoryPage';

import './App.css';

const StoryPageWithItem = withItem(StoryPage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page">
          <Switch>
            <Route exact path="/stories/:type" component={StoriesContainer} />
            <Route
              path="/story/:id"
              render={({ match }) => (
                <StoryPageWithItem item={parseInt(match.params.id, 10)} />
              )}
            />
            <Redirect from="*" to="/stories/top" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
