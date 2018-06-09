import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Story from '../Story/Story';

import withMore from '../../utils/withMore';
import withItem from '../../utils/withItem';

import Comment from '../../components/Comment/Comment';

const CommentList = withMore(withItem(Comment));

const ScreensStoryWrapper = styled.div`
  margin-bottom: 1em;
`;

const commentListWrapper = styled.div``;

class ScreensStory extends PureComponent {
  render() {
    const { kids: commentIds = [] } = this.props;

    return (
      <ScreensStoryWrapper>
        <Story {...this.props} />
        <commentListWrapper>
          <CommentList items={commentIds} />
        </commentListWrapper>
      </ScreensStoryWrapper>
    );
  }
}

ScreensStory.propTypes = {
  storyId: PropTypes.number,
};

export default ScreensStory;
