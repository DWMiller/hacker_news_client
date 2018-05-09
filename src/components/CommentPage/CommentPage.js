import React, { Component } from 'react';

import withItem from '../../helpers/withItem';

import Comment from '../Comment/Comment';

const CommentWithItem = withItem(Comment);

class CommentPage extends Component {
  render() {
    return (
      <div className="comments">
        <CommentWithItem item={this.props.item} />
      </div>
    );
  }
}

export default CommentPage;
