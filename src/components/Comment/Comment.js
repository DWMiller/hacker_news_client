import React, { PureComponent } from 'react';
import sanitizeHtml from 'sanitize-html';
import Timestamp from 'react-timestamp';

import { commentType } from '../../types';
import Comments from '../Comments';
import './Comment.css';

class Comment extends PureComponent {
  constructor(props) {
    super(props);

    const cleanedText = props.deleted ? 'Deleted' : sanitizeHtml(props.text);

    this.state = {
      minimized: false,
      cleanedText,
    };
  }

  toggleMinimized = () => {
    this.setState({
      minimized: !this.state.minimized,
    });
  };

  renderChildComments(commentIds) {
    return (
      <div className="comment__children">
        <Comments commentIds={commentIds} />
      </div>
    );
  }

  render() {
    return (
      <div className="comment">
        <div className="comment__header">
          <span className="comment__by">{this.props.by}</span>
          <span className="comment__time">
            <Timestamp time={this.props.time} />{' '}
          </span>
          <span onClick={this.toggleMinimized} className="comment__toggle">
            {this.state.minimized ? 'Expand' : 'Minimize'}
          </span>
        </div>

        {!this.state.minimized && (
          <div
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: this.state.cleanedText }}
          />
        )}

        {this.props.kids &&
          !this.state.minimized &&
          this.renderChildComments(this.props.kids)}
      </div>
    );
  }
}

Comment.propTypes = { ...commentType };

export default Comment;
