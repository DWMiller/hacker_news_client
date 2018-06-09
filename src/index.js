import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/global.css';
import './styles/pagination.css';

const Root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(Root, document.getElementById('root'));

ReactGA.initialize('UA-39752905-6');
ReactGA.pageview(window.location.pathname + window.location.search);

registerServiceWorker();
