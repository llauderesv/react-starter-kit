import React from 'react';

import withError from '../withError';
import withLoading from '../withLoader';

import TestRenderer from 'react-test-renderer';
import { compose } from 'redux';

import withFetch from '../withFetch';

const HelloWorld = _ => <h1>Hello World</h1>;

describe('Higher Order Component test suite.', () => {
  it('Should render withError component.', () => {
    const enhance = compose(
      withFetch,
      withError,
      withLoading,
    );

    // HelloWorld -> withLoading -> withError -> withFetch
    /**
     * withLoading Component Receives HelloWorld Component
     * withError Component Receives withLoading Component
     * withFetch Component Receives withError Component.
     *
     * withFetch Component Receives HelloWorld Component
     *
     */

    const EnhancedHelloWorld = enhance(HelloWorld);
    const app = TestRenderer.create(<EnhancedHelloWorld testProps={'test'} />);

    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
