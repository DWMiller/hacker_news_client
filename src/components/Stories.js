import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

import { PaginationStyles } from './styles/PaginationStyles';

import { StoryWithItem } from './Story/Story';

const PAGE_SIZE = 10;

function Stories(props) {
  const [page, setPage] = useState(1);

  const handlePageChange = pageNumber => setPage(pageNumber);

  const start = PAGE_SIZE * (page - 1);
  let end = start + PAGE_SIZE;

  end = end >= props.storyIds.length ? props.storyIds.length - 1 : end;

  const displayedStories = props.storyIds.slice(start, end);

  return (
    <PaginationStyles>
      <Pagination
        activePage={page}
        itemsCountPerPage={PAGE_SIZE}
        totalItemsCount={props.storyIds.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />

      {displayedStories.map(id => (
        <StoryWithItem key={id} item={id} />
      ))}

      <Pagination
        activePage={page}
        itemsCountPerPage={PAGE_SIZE}
        totalItemsCount={props.storyIds.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </PaginationStyles>
  );
}

Stories.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.number),
};

export default Stories;
