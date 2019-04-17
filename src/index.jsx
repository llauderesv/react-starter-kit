import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history, sagaMiddleware } from './configureStore';
import rootSaga from './sagas';

import App from './components/App';

const store = configureStore();
sagaMiddleware.run(rootSaga);
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App browserHistory={history} />
  </Provider>,
  rootElement,
);
