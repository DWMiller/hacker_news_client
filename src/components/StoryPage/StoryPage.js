import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Story from '../Story/Story';

import withMore from '../../helpers/withMore';
import withItem from '../../helpers/withItem';

import Comment from '../Comment/Comment';

import './StoryPage.css';

const CommentList = withMore(withItem(Comment));

class StoryPage extends PureComponent {
  render() {
    const { kids: commentIds = [] } = this.props;

    return (
      <div className="storyPage">
        <Story {...this.props} />
        <div className="comments">
          <CommentList items={commentIds} />
        </div>
      </div>
    );
  }
}

StoryPage.propTypes = {
  storyId: PropTypes.number,
};

export default StoryPage;
