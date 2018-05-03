import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withItem from '../../helpers/withItem';

import Comment from '../Comment/Comment';

const CommentWithItem = withItem(Comment);

class Comments extends Component {
  renderComments(commentIds) {
    return commentIds.map(id => <CommentWithItem key={id} itemId={id} />);
  }

  render() {
    return (
      <React.Fragment>
        {this.renderComments(this.props.commentIds)}
      </React.Fragment>
    );
  }
}

Comments.propTypes = {
  commentIds: PropTypes.arrayOf(PropTypes.number),
};

export default Comments;
