import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { fetchTopStories } from '../../api';
import withItem from '../../helpers/withItem';

import Header from '../Header/Header';
import Stories from '../Stories/Stories';
import StoryPage from '../StoryPage/StoryPage';

import './App.css';

const StoryPageWithItem = withItem(StoryPage);

class App extends Component {
  state = {
    storyIds: [],
  };

  componentDidMount() {
    fetchTopStories().then(storyIds => {
      this.setState(() => ({
        storyIds,
      }));
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="page">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Stories storyIds={this.state.storyIds} />}
            />
            <Route
              path="/story/:id"
              render={({ match }) => (
                <StoryPageWithItem itemId={parseInt(match.params.id, 10)} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
