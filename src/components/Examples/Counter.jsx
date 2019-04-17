import React from 'react';
import { connect } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  incrementAsyncCounter,
} from '../../actionCreators/counter';

import Button from 'react-bootstrap/Button';

const Counter = ({ count, increment, decrement, incrementAsync }) => {
  return (
    <div>
      <p>Current value is: {count} </p>

      <Button variant="primary" onClick={incrementAsync}>
        Increment Async +
      </Button>
      <Button variant="primary" onClick={increment}>
        Increment +
      </Button>

      <Button variant="secondary" onClick={decrement}>
        Decrement -
      </Button>
    </div>
  );
};

export default connect(
  state => state.counter,
  dispatch => ({
    increment: () => dispatch(incrementCounter()),
    incrementAsync: () => dispatch(incrementAsyncCounter()),
    decrement: () => dispatch(decrementCounter()),
  }),
)(Counter);
