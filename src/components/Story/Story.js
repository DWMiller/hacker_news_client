import React, { PureComponent } from 'react';
import Timestamp from 'react-timestamp';

import {
  StoryWrapper,
  StoryTitle,
  StorySummary,
  StoryHostname,
  StoryTime,
  StoryCommentCount,
} from './components';

import URL from 'url-parse';

import { storyType } from '../../types';

export class Story extends PureComponent {
  render() {
    const { id, title, time, url, kids } = this.props;
    const { hostname } = URL(url);

    const commentCount = kids ? kids.length - 1 : 0;

    return (
      <StoryWrapper>
        <StoryTitle title={title} url={url} />
        <StorySummary>
          <StoryHostname>
            (<a href={`//${hostname}`}>{hostname}</a>) |{' '}
          </StoryHostname>
          <StoryTime>
            Posted <Timestamp time={time} />
          </StoryTime>
          {' | '}
          <StoryCommentCount to={`/story/${id}`}>
            {commentCount} Comments
          </StoryCommentCount>
        </StorySummary>
      </StoryWrapper>
    );
  }
}

Story.propTypes = {
  ...storyType,
};

export default Story;
