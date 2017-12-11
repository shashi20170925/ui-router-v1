import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin } from 'ui-router-react';

import App from './components/App';

// import fetch polyfill
import 'whatwg-fetch';

import {plugins, states, config} from './router.config';

ReactDOM.render(
  <UIRouter plugins={plugins} states={states} config={config}>
    <App />
  </UIRouter>,
  document.getElementById('root')
);
registerServiceWorker();