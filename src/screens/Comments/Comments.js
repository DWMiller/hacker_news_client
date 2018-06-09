import React, { Component } from 'react';
import styled from 'styled-components';

import withItem from 'utils/withItem';

import Comment from 'components/Comment/Comment';

const CommentWithItem = withItem(Comment);

const ScreensCommentsWrapper = styled.div``;

class ScreensComments extends Component {
  render() {
    return (
      <ScreensCommentsWrapper>
        <CommentWithItem item={this.props.item} />
      </ScreensCommentsWrapper>
    );
  }
}

export default ScreensComments;
