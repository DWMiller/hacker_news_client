import React, { useState } from 'react';
import styled from 'styled-components';

const DefaultLoadMoreButton = styled.button``;

export const useWithMore = (items = [], increment = 5) => {
  const [displayedCount, setDisplayedCount] = useState(increment);

  const displayedItems = React.useMemo(() => items.slice(0, displayedCount), [
    items,
    displayedCount,
  ]);

  const hasMore = displayedCount < items.length;

  const loadMore = React.useCallback(() => {
    // TODO - increment can not exceed remaining item count, do nothing if !hasMore
    setDisplayedCount(count => count + increment);
  }, [increment]);

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
        {displayedItems.map(item => {
          const key = item.id ? item.id : item;
          return <WrappedComponent key={key} item={item} />;
        })}

        {hasMore && (
          <LoadMoreButton onClick={loadMore}>
            Load More - {props.items.length - displayedItems.length} Remaining
          </LoadMoreButton>
        )}
      </React.Fragment>
    );
  });
};
