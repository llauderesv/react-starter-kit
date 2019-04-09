import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';

import App from './components/App';

const store = configureStore();
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App browserHistory={history} />
  </Provider>,
  rootElement,
);
