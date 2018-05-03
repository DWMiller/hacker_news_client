import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

import store from './store';

import './styles/pagination.css';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(Root, document.getElementById('root'));
// registerServiceWorker();
