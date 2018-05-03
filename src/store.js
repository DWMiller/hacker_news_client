import { createStore, compose } from 'redux';

import rootReducer from './reducers/rootReducer';

const defaultState = {
  topStories: [],
  storedStories: {},
};

const storedState = JSON.parse(localStorage.getItem('redux-state')) || {};

const initialState = Object.assign({}, defaultState, storedState);

const store = createStore(
  rootReducer,
  initialState,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
