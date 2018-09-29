import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withMore from 'utils/withMore';
import withItem from 'utils/withItem';

import Comment from 'components/Comment/Comment';
import { StoryWithItem } from 'components/Story/Story';

import { LoadMoreButton } from 'components/Comment/components';

const CommentList = withMore(withItem(Comment), LoadMoreButton);

const ScreensStoryWrapper = styled.div`
  margin-bottom: 1em;
`;

export class ScreensStory extends PureComponent {
  render() {
    const { kids: commentIds = [] } = this.props;

    return (
      <ScreensStoryWrapper>
        <StoryWithItem {...this.props} />
        <div>
          <CommentList items={commentIds} />
        </div>
      </ScreensStoryWrapper>
    );
  }
}

ScreensStory.propTypes = {
  storyId: PropTypes.number,
};

export default withItem(ScreensStory);
