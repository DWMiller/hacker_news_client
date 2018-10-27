import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import sanitizeHtml from "sanitize-html";

import { commentType } from "types";
import { getAlias } from "utils/aliaser";
import withMore from "utils/withMore";
import withItem from "utils/withItem";

import {
  CommentContentContainer,
  CommentWrapper,
  CommentHeader,
  CommentText,
  CommentChildrenWrapper,
  ReadMoreLink,
  LoadMoreButton
} from "./components";

const Comment = React.memo(props => {
  const [isMinimized, setMinimize] = useState(false);

  const { kids: commentIds = [], deleted, text } = props;
  const alias = getAlias(props.by);
  const cleanedText = deleted ? "Deleted" : sanitizeHtml(text);

  const isTooDeep = props.depth ? props.depth > 5 : false;

  const showChildren = !isMinimized && commentIds.length > 0;

  return (
    <CommentWrapper isMinimized={isMinimized}>
      <CommentContentContainer isMinimized={isMinimized}>
        <CommentHeader
          {...props}
          commentIds={commentIds}
          alias={alias}
          isMinimized={isMinimized}
          onToggle={() => setMinimize(!isMinimized)}
        />

        {!isMinimized && <CommentText text={cleanedText} />}
      </CommentContentContainer>
      {showChildren &&
        !isTooDeep && (
          <CommentChildrenWrapper>
            <LazyLoad height={400} offset={100} once>
              <CommentList
                button={LoadMoreButton}
                items={commentIds}
                depth={props.depth + 1 || 1}
              />
            </LazyLoad>
          </CommentChildrenWrapper>
        )}

      {showChildren &&
        isTooDeep && (
          <ReadMoreLink to={`/comment/${props.id}`}>
            Read more of this conversation →
          </ReadMoreLink>
        )}
    </CommentWrapper>
  );
});

Comment.propTypes = { ...commentType };

// ! Should refactor this, encountered problems with
// ! child component needing to import parent for recursive rendering
const CommentList = withMore(withItem(Comment), LoadMoreButton);

export default Comment;
