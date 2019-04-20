import React from 'react';
import { compose } from 'redux';

import withLoader from '../../HOC/withLoader';
import withError from '../../HOC/withError';
import withFetch from '../../HOC/withFetch';

// data props will received it in withFetch Component....
const HelloWorld = ({ data }) => <p>Hello World {data}</p>;

const enhance = compose(
  withFetch,
  withError,
  withLoader,
);

export default enhance(HelloWorld);
