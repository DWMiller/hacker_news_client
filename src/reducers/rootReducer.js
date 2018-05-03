import { combineReducers } from 'redux';

import { topStoriesReducer, storedStoriesReducer } from './storiesReducer';

const rootReducer = combineReducers({
  storedStories: storedStoriesReducer,
  topStories: topStoriesReducer,
});

export default rootReducer;
