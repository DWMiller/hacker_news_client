import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Story from '../Story';
import withItem from '../../helpers/withItem';

import Pagination from 'react-js-pagination';

import './Stories.css';

const StoryWithItem = withItem(Story);

class Stories extends Component {
  pageSize = 5;

  state = {
    activePage: 1,
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  renderStories(storyIds) {
    return storyIds.map(storyId => (
      <StoryWithItem key={storyId} itemId={storyId} />
    ));
  }

  render() {
    const start = this.pageSize * this.state.activePage;
    let end = start + this.pageSize;

    end =
      end >= this.props.storyIds.length ? this.props.storyIds.length - 1 : end;

    return (
      <div className="stories">
        {/* {this.renderStories(start, count, this.props.stories)} */}
        {this.renderStories(this.props.storyIds.slice(start, end))}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.pageSize}
          totalItemsCount={this.props.storyIds.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

Stories.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.number),
};

export default Stories;
