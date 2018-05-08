import React, { PureComponent } from 'react';
import sanitizeHtml from 'sanitize-html';
import Timestamp from 'react-timestamp';
import { getAlias } from '../../aliaser';

import { commentType } from '../../types';
import './Comment.css';

import withMore from '../../helpers/withMore';
import withItem from '../../helpers/withItem';

class Comment extends PureComponent {
  constructor(props) {
    super(props);

    const cleanedText = props.deleted ? 'Deleted' : sanitizeHtml(props.text);

    this.state = {
      alias: getAlias(props.by),
      minimized: false,
      cleanedText,
    };
  }

  toggleMinimized = () => {
    this.setState({
      minimized: !this.state.minimized,
    });
  };

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

        {!this.state.minimized && (
          <div className="comment__children">
            <CommentList items={commentIds} />
          </div>
        )}
      </div>
    );
  }
}

//TODO - this is annoying to have declared after the class, restructure things
const CommentList = withMore(withItem(Comment));

Comment.propTypes = { ...commentType };

export default Comment;
