import React, { PureComponent } from 'react';
import Timestamp from 'react-timestamp';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import ExternalLinkAlt from 'react-icons/lib/fa/external-link';
import sanitizeHtml from 'sanitize-html';

import { getAlias } from 'utils/aliaser';
import { commentType } from 'types';

import './Comment.css';

import withMore from 'utils/withMore';
import withItem from 'utils/withItem';

class Comment extends PureComponent {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    const cleanedText = nextProps.deleted
      ? 'Deleted'
      : sanitizeHtml(nextProps.text);

    return {
      alias: getAlias(nextProps.by),
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

    const isTooDeep = this.props.depth ? this.props.depth > 5 : false;

    const showChildren = !this.state.minimized && commentIds.length > 0;

    return (
      <div
        className={
          'comment' + (this.state.minimized ? ' comment--minimized' : '')
        }
      >
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

          <Link
            className="comment__permalink"
            title="Open a new page starting at this comment"
            to={`/comment/${this.props.id}`}
          >
            <ExternalLinkAlt />
          </Link>
        </div>

        {!this.state.minimized && (
          <div
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: this.state.cleanedText }}
          />
        )}

        {showChildren &&
          !isTooDeep && (
            <div className="comment__children">
              <LazyLoad height={400} offset={100} once>
                <CommentList
                  items={commentIds}
                  depth={this.props.depth + 1 || 1}
                />
              </LazyLoad>
            </div>
          )}

        {showChildren &&
          isTooDeep && (
            <Link
              className="comment__chainExtensionLink"
              to={`/comment/${this.props.id}`}
            >
              Read more of this conversation →
            </Link>
          )}
      </div>
    );
  }
}

//TODO - this is annoying to have declared after the class, restructure things
const CommentList = withMore(withItem(Comment));

Comment.propTypes = { ...commentType };

export default Comment;
