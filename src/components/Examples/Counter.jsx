import React from 'react';
import { connect } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
} from '../../actionCreators/counter';

import Button from 'react-bootstrap/Button';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Current value is: {count} </p>
      <Button variant="primary" onClick={increment}>
        Increment +
      </Button>
      <Button variant="secondary" onClick={decrement}>
        Decrement -
      </Button>
    </div>
  );
};

// Map Counter State to Counter component
export default connect(
  state => state.counter,
  dispatch => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
  }),
)(Counter);
