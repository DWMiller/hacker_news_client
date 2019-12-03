import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchStories } from 'utils/api';

import Stories from 'components/Stories';

function ScreensStories() {
  const { type } = useParams();

  const [storyIds, setStoryIds] = React.useState([]);

  React.useEffect(() => {
    fetchStories(type).then(storyIds => {
      setStoryIds(storyIds);
    });
  }, [type]);

  return <Stories storyIds={storyIds} />;
}

export default ScreensStories;
