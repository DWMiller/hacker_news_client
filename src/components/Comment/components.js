import React from "react";
import styled, { css } from "styled-components";
import { Link } from "@reach/router";
import Timestamp from "react-timestamp";
import { FaExternalLinkAlt } from "react-icons/fa";

const CommentHeaderWrapper = styled.div`
  margin-bottom: ${props => (props.isMinimized ? "0" : "1em")};
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
  margin-bottom: 1em;
  word-wrap: break-word;
  color: ${props => (props.isMinimized ? "gray" : "inherit")};
  font-size: ${props => (props.isMinimized ? "0.75" : "inherit")};
`;

export const CommentContentContainer = styled.div`
  background: rgb(255, 255, 255);
  padding: 1em;
  border-bottom: 1px solid rgb(204, 204, 204);
  box-shadow: ${props => props.theme.shadow};

  ${props =>
    props.isMinimized &&
    css`
      box-shadow: none;
      border: none;
    `};
`;

export const CommentHeader = ({
  isMinimized,
  onToggle,
  time,
  commentIds,
  by,
  alias,
  id
}) => (
  <CommentHeaderWrapper isMinimized={isMinimized}>
    <CommentToggle onClick={onToggle}>
      {isMinimized ? "[ + ]" : "[ - ]"}
    </CommentToggle>

    <CommentBy data-original-name={by}>{alias}</CommentBy>

    <CommentTime>
      <Timestamp time={time} />{" "}
    </CommentTime>

    <CommentReplyCount>{commentIds.length} Replies</CommentReplyCount>

    <CommentPermaLink
      title="Open a new page starting at this comment"
      to={`/comment/${id}`}
    >
      <FaExternalLinkAlt />
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
  margin-left: 0.5rem;

  @media (min-width: 800px) {
    margin-left: 1.5rem;
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
