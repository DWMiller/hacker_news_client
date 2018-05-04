import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

import './styles/pagination.css';

const Root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(Root, document.getElementById('root'));
// registerServiceWorker();
