import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import { Link } from 'react-router-dom';

import ExternalLinkAlt from 'react-icons/lib/fa/external-link';

import { storyType } from '../../types';

import './Story.css';

export default class Story extends Component {
  render() {
    const { id, title, time, url, by, kids } = this.props;

    const commentCount = kids ? kids.length - 1 : 0;

    return (
      <div className="story">
        <h2 className="story__title">
          <a href={url}>
            <ExternalLinkAlt />
          </a>
          <span> - </span>
          <span>{title} </span>
        </h2>
        <p className="story__summary">
          <span className="story__by">Posted by {by} </span>
          <Timestamp className="story__time" time={time} />
          {' | '}
          <Link className="story__commentCount" to={`/story/${id}`}>
            {commentCount} Comments
          </Link>
        </p>
      </div>
    );
  }
}

Story.propTypes = {
  ...storyType,
};
