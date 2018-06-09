import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import ExternalLinkAlt from 'react-icons/lib/fa/external-link';

const CommentHeaderWrapper = styled.div`
  margin-bottom: ${props => (props.isMinimized ? '0' : '1em')};
`;

const CommentToggle = styled.span`
  margin-right: 1em;
  cursor: pointer;
`;

const CommentBy = styled.span`
  margin-right: 1em;
`;

const CommentTime = styled.span`
  margin-right: 1em;
`;

const CommentReplyCount = styled.span`
  margin-right: 1em;
`;

const CommentPermaLink = styled(Link)``;

export const CommentWrapper = styled.div`
  padding: 1em;
  margin-bottom: 1em;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(204, 204, 204);
  word-wrap: break-word;
  color: ${props => (props.isMinimized ? 'gray' : 'inherit')};
  font-size: ${props => (props.isMinimized ? '0.75' : 'inherit')};
  border: ${props => (props.isMinimized ? 'none' : 'invalid')};

  box-shadow: ${props =>
    props.isMinimized ? 'none' : 'rgba(0, 0, 0, 0.3) 1px 1px 5px'};
`;

export const CommentHeader = ({
  isMinimized,
  onToggle,
  time,
  commentIds,
  by,
  alias,
  id,
}) => (
  <CommentHeaderWrapper isMinimized={isMinimized}>
    <CommentToggle onClick={onToggle}>
      {isMinimized ? '[ + ]' : '[ - ]'}
    </CommentToggle>

    <CommentBy data-original-name={by}>{alias}</CommentBy>

    <CommentTime>
      <Timestamp time={time} />{' '}
    </CommentTime>

    <CommentReplyCount>{commentIds.length} Replies</CommentReplyCount>

    <CommentPermaLink
      title="Open a new page starting at this comment"
      to={`/comment/${id}`}
    >
      <ExternalLinkAlt />
    </CommentPermaLink>
  </CommentHeaderWrapper>
);

const CommentTextWrapper = styled.div`
  overflow: auto;
`;

export const CommentText = ({ text }) => (
  <CommentTextWrapper dangerouslySetInnerHTML={{ __html: text }} />
);

export const CommentChildrenWrapper = styled.div`
  margin-left: 0.5em;
  margin-top: 1em;

  @media (min-width: 800px) {
    margin-left: 2em;
  }
`;

export const ReadMoreLink = styled(Link)`
  display: block;
  margin-top: 1em;
  text-align: right;
  text-decoration: none;
`;

export const LoadMoreButton = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;
