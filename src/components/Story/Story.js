import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Timestamp from 'react-timestamp';
import { Link } from 'react-router-dom';
import URL from 'url-parse';

import withItem from 'utils/withItem';

import { storyType } from 'types';

import { StoryContainer } from './styles';

function Story(props) {
  const { id, title, time, url, kids } = props;
  const { hostname } = URL(url);

  const commentCount = kids ? kids.length - 1 : 0;

  return (
    <StoryContainer className="story__container">
      <div className="story__title">
        <a href={url}>
          <FaExternalLinkAlt />
          <span> {title}</span>
        </a>
      </div>

      <p className="story__summary">
        <span>
          (<a href={`//${hostname}`}>{hostname}</a>) |{' '}
        </span>
        <span>
          Posted <Timestamp time={time} />
        </span>
        {' | '}
        <Link to={`/story/${id}`}>{commentCount} Comments</Link>
      </p>
    </StoryContainer>
  );
}

function Skeleton() {
  return (
    <StoryContainer>
      <div className="story__skeleton"></div>
    </StoryContainer>
  );
}

Story.propTypes = {
  ...storyType,
};

export const StoryWithItem = withItem(Story, Skeleton);

export default Story;
