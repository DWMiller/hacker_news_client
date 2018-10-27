import React, { Component } from 'react';

import { fetchStories } from 'utils/api';

import Stories from 'components/Stories';

export class ScreensStories extends Component {
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
    if (this.props.type !== prevProps.type) this.fetchStories(this.props.type);
  }

  componentDidMount() {
    this.fetchStories(this.props.type);
  }

  render() {
    return <Stories storyIds={this.state.storyIds} />;
  }
}

export default ScreensStories;
