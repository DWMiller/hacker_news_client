import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DefaultLoadMoreButton = styled.button``;

const renderItems = (items, Component) => {
  return items.map(item => {
    const key = item.id ? item.id : item;
    return <Component key={key} item={item} />;
  });
};

export const useWithMore = (items = [], increment = 5) => {
  const [displayedCount, setDisplayedCount] = useState(increment);

  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    setDisplayedItems(items.slice(0, displayedCount));
  }, [items, displayedCount]);

  const hasMore = displayedCount < items.length;

  const loadMore = () => {
    setDisplayedCount(displayedCount + increment);
  };

  return {
    displayedItems,
    hasMore,
    loadMore,
  };
};

export default (WrappedComponent, LoadMoreButton = DefaultLoadMoreButton) => {
  return React.memo(props => {
    const { displayedItems, hasMore, loadMore } = useWithMore(props.items, 5);

    return (
      <React.Fragment>
        {props.items.length > 0 &&
          renderItems(props.items.slice(0, displayedItems), WrappedComponent)}
        {hasMore && (
          <LoadMoreButton onClick={loadMore}>
            Load More - {props.items.length - displayedItems.length} Remaining
          </LoadMoreButton>
        )}
      </React.Fragment>
    );
  });
};
