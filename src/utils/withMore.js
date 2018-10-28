import React, { useState } from "react";
import styled from "styled-components";

const DefaultLoadMoreButton = styled.button``;

const renderItems = (items, Component) => {
  return items.map(item => {
    const key = item.id ? item.id : item;
    return <Component key={key} item={item} />;
  });
};

export default (WrappedComponent, LoadMoreButton = DefaultLoadMoreButton) => {
  return React.memo((props) => {
    const [displayedItems, setDisplayedItems] = useState(5);

    const isMoreToLoad = displayedItems < props.items.length;

    const loadMore = () => {
      setDisplayedItems(displayedItems + 5);
    };

    return (
      <React.Fragment>
        {props.items.length > 0 &&
          renderItems(props.items.slice(0, displayedItems), WrappedComponent)}
        {isMoreToLoad && (
          <LoadMoreButton onClick={loadMore}>
            Load More - {props.items.length - displayedItems} Remaining
          </LoadMoreButton>
        )}
      </React.Fragment>
    );
  });
};
