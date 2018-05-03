import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import { Link } from 'react-router-dom';

import { storyType } from '../../types';

export default class Story extends Component {
  render() {
    const { id, title, time, url, by, kids } = this.props;

    const commentCount = kids ? kids.length - 1 : 0;

    return (
      <div className="story">
        <h2>
          <Link to={`/story/${id}`}>{title} </Link>
          <a href={url}>(Link)</a>
        </h2>
        <p>
          <span className="story__by">
            Posted by {by} <Timestamp time={time} />
          </span>

          <span className="story__commentCount">
            {' '}
            | {commentCount} Comments
          </span>
        </p>
      </div>
    );
  }
}

Story.propTypes = {
  ...storyType,
};
