import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withMore from 'utils/withMore';
import withItem from 'utils/withItem';

import Comment from 'components/Comment/Comment';
import Story from 'components/Story/Story';

const CommentList = withMore(withItem(Comment));

const ScreensStoryWrapper = styled.div`
  margin-bottom: 1em;
`;

const CommentListWrapper = styled.div``;

class ScreensStory extends PureComponent {
  render() {
    const { kids: commentIds = [] } = this.props;

    return (
      <ScreensStoryWrapper>
        <Story {...this.props} />
        <CommentListWrapper>
          <CommentList items={commentIds} />
        </CommentListWrapper>
      </ScreensStoryWrapper>
    );
  }
}

ScreensStory.propTypes = {
  storyId: PropTypes.number,
};

export default ScreensStory;
