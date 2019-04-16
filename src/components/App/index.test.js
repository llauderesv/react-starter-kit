import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore, { history } from '../../configureStore';

import App from './index';

describe('App component', () => {
  let store;
  beforeAll(() => {
    store = configureStore();
  });

  it('Should render w/out crashing', () => {
    const app = TestRenderer.create(
      <Provider store={store}>
        <App browserHistory={history} />
      </Provider>,
    );

    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
