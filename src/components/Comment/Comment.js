import React, { PureComponent } from 'react';
import sanitizeHtml from 'sanitize-html';
import Timestamp from 'react-timestamp';
import { getAlias } from '../../aliaser';

import { commentType } from '../../types';
import Comments from '../Comments';
import './Comment.css';

class Comment extends PureComponent {
  constructor(props) {
    super(props);

    const cleanedText = props.deleted ? 'Deleted' : sanitizeHtml(props.text);

    this.state = {
      alias: getAlias(props.by),
      displayedChildren: 5,
      minimized: false,
      cleanedText,
    };
  }

  loadMore = () => {
    this.setState(state => ({
      displayedChildren: state.displayedChildren + 5,
    }));
  };

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
    const { kids: commentIds = [] } = this.props;

    return (
      <div className="comment">
        <div className="comment__header">
          <span onClick={this.toggleMinimized} className="comment__toggle">
            {this.state.minimized ? '[ + ]' : '[ - ]'}
          </span>

          <span className="comment__by" data-original-name={this.props.by}>
            {this.state.alias}
          </span>
          <span className="comment__time">
            <Timestamp time={this.props.time} />{' '}
          </span>

          <span className="comment__replyCount">
            {commentIds.length} Replies
          </span>
        </div>

        {!this.state.minimized && (
          <div
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: this.state.cleanedText }}
          />
        )}

        {!this.state.minimized &&
          this.renderChildComments(
            commentIds.slice(0, this.state.displayedChildren)
          )}

        {!this.state.minimized &&
          this.state.displayedChildren < commentIds.length && (
            <a className="comments__loadButton" onClick={this.loadMore}>
              Load More - {commentIds.length - this.state.displayedChildren}{' '}
              Remaining
            </a>
          )}
      </div>
    );
  }
}

Comment.propTypes = { ...commentType };

export default Comment;
