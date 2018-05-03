export const topStoriesReducer = (state = [], { storyIds, type }) => {
  switch (type) {
    case 'FETCH_TOP_STORIES_LIST_SUCCESS':
      return [...storyIds];
    default:
      return state;
  }
};

export const storedStoriesReducer = (state = {}, { stories, type }) => {
  switch (type) {
    case 'FETCH_STORIES_SUCCESS':
      console.log(stories);
      return { ...state, ...stories };
    default:
      return state;
  }
};
