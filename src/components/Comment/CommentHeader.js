import React from 'react';
import styled from 'styled-components';
import Timestamp from 'react-timestamp';
import { Link } from '@reach/router';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CommentHeaderWrapper = styled.div`
  margin-bottom: ${props => (props.isMinimized ? '0' : '1em')};

  .comment__by,
  .comment__time,
  .comment__replyCount {
    margin-right: 1em;
  }

  .comment__toggle {
    margin-right: 1em;
    cursor: pointer;

    background: none;
    outline: none;
    border: none;
  }
`;

const CommentHeader = ({
  isMinimized,
  onToggle,
  time,
  commentIds,
  by,
  alias,
  id,
}) => (
  <CommentHeaderWrapper isMinimized={isMinimized}>
    <button className="comment__toggle" onClick={onToggle}>
      {isMinimized ? '[ + ]' : '[ - ]'}
    </button>

    <span className="comment__by" data-original-name={by}>
      {alias}
    </span>

    <span className="comment__time">
      <Timestamp time={time} />{' '}
    </span>

    <span className="comment__replyCount">{commentIds.length} Replies</span>

    <Link
      title="Open a new page starting at this comment"
      to={`/comment/${id}`}
    >
      <FaExternalLinkAlt />
    </Link>
  </CommentHeaderWrapper>
);

export default CommentHeader;
