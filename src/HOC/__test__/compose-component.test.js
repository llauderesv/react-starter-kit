import React from 'react';

import withError from '../withError';
import withLoading from '../withLoader';

import TestRenderer from 'react-test-renderer';
import { compose } from 'redux';

import withFetch from '../withFetch';

const HelloWorld = ({ testProps }) => <h1>Hello World {testProps}</h1>;

describe('HOC test suite.', () => {
  it('Should render HelloWorld component.', () => {
    // HelloWorld -> withLoading -> withError -> withFetch
    /**
     * withLoading Component Receives HelloWorld Component
     * withError Component Receives withLoading Component
     * withFetch Component Receives withError Component.
     *
     * withFetch Component Receives HelloWorld Component
     *
     */
    const EnhancedHelloWorld = compose(
      withFetch,
      withError,
      withLoading,
    )(HelloWorld);
    const app = TestRenderer.create(<EnhancedHelloWorld testProps={'test'} />);

    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
