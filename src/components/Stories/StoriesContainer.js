import React, { Component } from 'react';

import { fetchStories } from '../../api';

import Stories from '../Stories/Stories';

export default class StoriesContainer extends Component {
  state = {
    storyIds: [],
  };

  fetchStories(type = 'top') {
    return fetchStories(type).then(storyIds => {
      this.setState(() => ({
        storyIds,
      }));
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.type !== prevProps.match.params.type)
      this.fetchStories(this.props.match.params.type);
  }

  componentDidMount() {
    this.fetchStories(this.props.match.params.type);
  }

  render() {
    return <Stories storyIds={this.state.storyIds} />;
  }
}
