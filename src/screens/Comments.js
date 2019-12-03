import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchItem } from 'utils/withItem';

import Comment from 'components/Comment/Comment';

function ScreensComments() {
  const { item } = useParams();

  const [loading, comment] = useFetchItem(item);

  if (loading) {
    return <div className="loading">...Loading</div>;
  }

  return <Comment {...comment} />;
}

export default ScreensComments;
