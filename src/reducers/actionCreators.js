export function fetchedTopStories(storyIds) {
  return {
    type: 'FETCH_TOP_STORIES_LIST_SUCCESS',
    storyIds,
  };
}

export function fetchedStories(stories) {
  return {
    type: 'FETCH_STORIES_SUCCESS',
    stories,
  };
}
