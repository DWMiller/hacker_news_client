import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

import { PaginationStyles } from './styles/PaginationStyles'
import { WithItem } from 'utils/withItemRP';

import { Story } from './Story/Story';

class Stories extends PureComponent {
  pageSize = 10;

  state = {
    activePage: 1,
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  renderPagination = () => {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.pageSize}
          totalItemsCount={this.props.storyIds.length - 1}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  };

  renderStories(storyIds) {
    return storyIds.map(storyId => (
      <WithItem key={storyId} item={storyId}>
        {({ item, loading }) => {
          if (loading) {
            return <div className="loading">...Loading</div>;
          }

          return <Story {...item} />;
        }}
      </WithItem>
    ));
  }

  render() {
    const start = this.pageSize * (this.state.activePage - 1);
    let end = start + this.pageSize;

    end =
      end >= this.props.storyIds.length ? this.props.storyIds.length - 1 : end;

    return (
      <PaginationStyles>
        {this.renderPagination()}
        {this.renderStories(this.props.storyIds.slice(start, end))}
        {this.renderPagination()}
      </PaginationStyles>
    );
  }
}

Stories.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.number),
};

export default Stories;
