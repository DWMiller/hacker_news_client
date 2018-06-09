import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ExternalLinkAlt from 'react-icons/lib/fa/external-link';

export const StoryWrapper = styled.div`
  margin-bottom: 0.5em;
  padding: 10px 60px 10px 10px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(204, 204, 204);
  border-left: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
`;

const StoryTitleWrapper = styled.h2`
  font-weight: bold;
  font-family: serif;
  font-size: 1.25em;
  margin: 0;

  a {
    white-space: normal;
    text-decoration: none;
    color: black;
  }

  a svg {
    color: #4a913c;
  }

  a:visited svg {
    color: grey;
  }
`;

export const StoryTitle = ({ title, url }) => (
  <StoryTitleWrapper>
    <a href={url}>
      <ExternalLinkAlt />
      <span> {title}</span>
    </a>
  </StoryTitleWrapper>
);

export const StorySummary = styled.p`
  margin: 0;
`;

export const StoryHostname = styled.span``;
export const StoryTime = styled.span``;

export const StoryCommentCount = styled(Link)``;
