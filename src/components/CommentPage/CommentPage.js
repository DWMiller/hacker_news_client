import React, { Component } from 'react';

import Comment from '../Comment/Comment';

class CommentPage extends Component {
  render() {
    return (
      <div className="comments">
        <Comment {...this.props} />
      </div>
    );
  }
}

CommentPage.propTypes = {};

export default CommentPage;
