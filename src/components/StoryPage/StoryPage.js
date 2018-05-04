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
    const { kids: commentIds = [] } = this.props;

    return (
      <div className="storyPage">
        <Story {...this.props} />
        <div className="comments">
          <Comments
            commentIds={commentIds.slice(0, this.state.displayedComments)}
          />

          {this.state.displayedComments < commentIds.length && (
            <a className="comments__loadButton" onClick={this.loadMore}>
              Load More - {commentIds.length - this.state.displayedComments}{' '}
              Remaining
            </a>
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
