import React from 'react';

import useFetchItem from 'utils/useFetchItem';

import Comment from 'components/Comment/Comment';

const ScreensComments = React.memo(props => {
  const [loading, comment] = useFetchItem(props.item);

  if (loading) {
    return <div className="loading">...Loading</div>;
  }

  return <Comment {...comment} />;
});

export default ScreensComments;
