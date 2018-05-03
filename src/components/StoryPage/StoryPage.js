import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Story from '../Story/Story';
import Comments from '../Comments/Comments';

import './StoryPage.css';

class StoryPage extends Component {
  state = {
    displayedComments: 5,
  };

  loadMore = () => {
    this.setState(state => ({
      displayedComments: state.displayedComments + 5,
    }));
  };

  render() {
    return (
      <div className="storyPage">
        <Story {...this.props} />
        <div className="comments">
          <Comments
            commentIds={this.props.kids.slice(0, this.state.displayedComments)}
          />
          {this.state.displayedComments < this.props.kids.length && (
            <button onClick={this.loadMore}>More</button>
          )}
        </div>
      </div>
    );
  }
}

StoryPage.propTypes = {
  storyId: PropTypes.number,
};

export default StoryPage;
