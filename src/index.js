import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';

import * as serviceWorker from './serviceWorker';
import App from './components/App';

import './styles/global.css';
import './styles/pagination.css';

ReactDOM.render(<App />, document.getElementById('root'));

ReactGA.initialize('UA-39752905-6');
ReactGA.pageview(window.location.pathname + window.location.search);

serviceWorker.unregister();
