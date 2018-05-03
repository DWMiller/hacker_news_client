import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../reducers/actionCreators';
import { fetchTopStories } from '../../api';
import withItem from '../../helpers/withItem';

import Header from '../Header/Header';
import Stories from '../Stories/Stories';
import StoryPage from '../StoryPage/StoryPage';

import './App.css';

const StoryPageWithItem = withItem(StoryPage);

class App extends Component {
  componentDidMount() {
    fetchTopStories().then(this.props.fetchedTopStories);
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
              render={() => (
                <Stories
                  storedStories={this.props.storedStories}
                  storyIds={this.props.topStories}
                />
              )}
            />
            <Route
              path="/story/:id"
              component={({ match }) => (
                <StoryPageWithItem itemId={parseInt(match.params.id, 10)} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ topStories, storedStories }) => {
  return {
    topStories,
    storedStories,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
