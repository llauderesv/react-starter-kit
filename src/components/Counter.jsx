import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../reducers/counter';

const Counter = ({ count, increment, decrement, match }) => {
  console.log(match);
  return (
    <div>
      <h1>The current value is {count} </h1>
      <button name="increment" onClick={increment}>
        + Increment
      </button>
      <button name="decrement" onClick={decrement}>
        - Decrement
      </button>
    </div>
  );
};

// Map Counter State to Counter component
export default withRouter(
  connect(
    state => state.counter,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Counter)
);
