import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import sanitizeHtml from 'sanitize-html';
import { Link } from '@reach/router';

import { commentType } from 'types';
import { getAlias } from 'utils/aliaser';
import withMore from 'utils/withMore';
import withItem from 'utils/withItem';

import LoadMoreButton from 'components/LordMoreButton';

import CommentHeader from './CommentHeader';
import { CommentWrapper } from './styles';

const Comment = React.memo(props => {
  const [isMinimized, setMinimize] = useState(false);

  const { kids: commentIds = [], deleted, text } = props;
  const alias = getAlias(props.by);
  const cleanedText = deleted ? 'Deleted' : sanitizeHtml(text);

  const isTooDeep = props.depth ? props.depth > 5 : false;

  const showChildren = !isMinimized && commentIds.length > 0;

  return (
    <CommentWrapper isMinimized={isMinimized}>
      <div className="comment__content">
        <CommentHeader
          {...props}
          commentIds={commentIds}
          alias={alias}
          isMinimized={isMinimized}
          onToggle={() => setMinimize(!isMinimized)}
        />

        {!isMinimized && (
          <div
            className="comment__textWrapper"
            dangerouslySetInnerHTML={{ __html: cleanedText }}
          />
        )}
      </div>
      {showChildren && !isTooDeep && (
        <div className="comment__childrenWrapper">
          <LazyLoad height={400} offset={100} once>
            <CommentList
              button={LoadMoreButton}
              items={commentIds}
              depth={props.depth + 1 || 1}
            />
          </LazyLoad>
        </div>
      )}

      {showChildren && isTooDeep && (
        <Link className="comment__readMoreLink" to={`/comment/${props.id}`}>
          Read more of this conversation →
        </Link>
      )}
    </CommentWrapper>
  );
});

Comment.propTypes = { ...commentType };

// ! Should refactor this, encountered problems with
// ! child component needing to import parent for recursive rendering
const CommentList = withMore(withItem(Comment), LoadMoreButton);

export default Comment;
