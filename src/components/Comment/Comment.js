import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import sanitizeHtml from 'sanitize-html';

import { commentType } from 'types';
import { getAlias } from 'utils/aliaser';
import withMore from 'utils/withMore';
import withItem from 'utils/withItem';

import {
  CommentContentContainer,
  CommentWrapper,
  CommentHeader,
  CommentText,
  CommentChildrenWrapper,
  ReadMoreLink,
  LoadMoreButton,
} from './components';

class Comment extends PureComponent {
  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    // TODO - this should be moved to parent component
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
      <CommentWrapper isMinimized={this.state.minimized}>
        <CommentContentContainer isMinimized={this.state.minimized}>
          <CommentHeader
            {...this.props}
            commentIds={commentIds}
            alias={this.state.alias}
            isMinimized={this.state.minimized}
            onToggle={this.toggleMinimized}
          />

          {!this.state.minimized && (
            <CommentText text={this.state.cleanedText} />
          )}
        </CommentContentContainer>
        {showChildren &&
          !isTooDeep && (
            <CommentChildrenWrapper>
              <LazyLoad height={400} offset={100} once>
                <CommentList
                  button={LoadMoreButton}
                  items={commentIds}
                  depth={this.props.depth + 1 || 1}
                />
              </LazyLoad>
            </CommentChildrenWrapper>
          )}

        {showChildren &&
          isTooDeep && (
            <ReadMoreLink to={`/comment/${this.props.id}`}>
              Read more of this conversation →
            </ReadMoreLink>
          )}
      </CommentWrapper>
    );
  }
}

Comment.propTypes = { ...commentType };

// ! Should refactor this, encountered problems with
// ! child component needing to import parent for recursive rendering
const CommentList = withMore(withItem(Comment), LoadMoreButton);

export default Comment;
