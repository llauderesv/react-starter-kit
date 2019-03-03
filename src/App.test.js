import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

describe('App Component', () => {
  it('Should render w/out crashing', () => {
    const app = TestRenderer.create(<App />);

    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
