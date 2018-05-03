import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Story from '../Story';
import withItem from '../../helpers/withItem';

import Pagination from 'react-js-pagination';

import './Stories.css';

const StoryWithItem = withItem(Story);

class Stories extends Component {
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
      <StoryWithItem key={storyId} itemId={storyId} />
    ));
  }

  render() {
    const start = this.pageSize * (this.state.activePage - 1);
    let end = start + this.pageSize;

    end =
      end >= this.props.storyIds.length ? this.props.storyIds.length - 1 : end;

    return (
      <div className="stories">
        {this.renderPagination()}
        {this.renderStories(this.props.storyIds.slice(start, end))}
        {this.renderPagination()}
      </div>
    );
  }
}

Stories.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.number),
};

export default Stories;
