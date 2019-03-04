import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import withMore from 'utils/withMore';
import withItem from 'utils/withItem';
import useFetchItem from 'utils/useFetchItem';

import Comment from 'components/Comment/Comment';
import Story from 'components/Story/Story';
import LoadMoreButton from 'components/LordMoreButton';

const CommentWithItem = withItem(Comment);
const CommentList = withMore(CommentWithItem, LoadMoreButton);

const ScreensStoryWrapper = styled.div`
  margin-bottom: 1em;
`;

const ScreensStory = props => {
  const [loading, item] = useFetchItem(props.item);

  if (loading) {
    return <div className="loading">...Loading</div>;
  }

  const { kids: commentIds = [] } = item;

  return (
    <ScreensStoryWrapper>
      <Story {...item} />
      <div>
        <CommentList items={commentIds} />
      </div>
    </ScreensStoryWrapper>
  );
};

ScreensStory.propTypes = {
  storyId: PropTypes.number,
};

export default ScreensStory;
