import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useWithMore } from 'utils/withMore';
import { useFetchItem } from 'utils/withItem';

import { CommentWithItem } from 'components/Comment/Comment';
import Story from 'components/Story/Story';
import LoadMoreButton from 'components/LordMoreButton';

const ScreensStoryWrapper = styled.div`
  margin-bottom: 1em;

  .story__container {
    border-top: 4px solid ${props => props.theme.green};
  }
`;

function ScreensStory() {
  const { item } = useParams();

  const [loading, itemData] = useFetchItem(item);
  const [kids, setKids] = useState([]);

  const { displayedItems, hasMore, loadMore } = useWithMore(kids, 5);

  useEffect(() => {
    if (!loading) {
      setKids(itemData.kids);
    }
  }, [loading, itemData]);

  if (loading) {
    return <div className="loading">...Loading</div>;
  }

  return (
    <ScreensStoryWrapper>
      <Story {...itemData} />
      <div>
        {displayedItems.map(item => (
          <CommentWithItem item={item} key={item} />
        ))}

        {hasMore ? (
          <LoadMoreButton onClick={loadMore}>
            Load More - {kids.length - displayedItems.length} Remaining
          </LoadMoreButton>
        ) : null}
      </div>
    </ScreensStoryWrapper>
  );
}

ScreensStory.propTypes = {
  storyId: PropTypes.number,
};

export default ScreensStory;
