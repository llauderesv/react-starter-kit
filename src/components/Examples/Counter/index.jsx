import React from 'react';
import { connect } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  incrementAsyncCounter,
} from '../../../actionCreators/counter';

import Button from 'react-bootstrap/Button';

import './index.scss';

const Counter = ({ count, increment, decrement, incrementAsync }) => {
  return (
    <div>
      <p>Current value is: {count} </p>
      <div className="button-container">
        <Button variant="primary" onClick={increment}>
          Increment +
        </Button>
        <Button variant="danger" onClick={decrement}>
          Decrement -
        </Button>
        <Button variant="primary" onClick={incrementAsync}>
          Increment Async +
        </Button>
      </div>
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
