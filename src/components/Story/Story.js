import React, { PureComponent } from 'react';
import Timestamp from 'react-timestamp';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from '@reach/router';
import URL from 'url-parse';

import withItem from 'utils/withItem';

import { storyType } from 'types';

import { StoryWrapper } from './styles';

export class Story extends PureComponent {
  render() {
    const { id, title, time, url, kids } = this.props;
    const { hostname } = URL(url);

    const commentCount = kids ? kids.length - 1 : 0;

    return (
      <StoryWrapper>
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
      </StoryWrapper>
    );
  }
}

Story.propTypes = {
  ...storyType,
};

export const StoryWithItem = withItem(Story);

export default Story;
