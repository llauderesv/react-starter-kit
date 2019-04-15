import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { actionCreators as ErrorActionCreators } from '../reducers/error';
import { actionCreators as CounterActionCreators } from '../reducers/counter';

const Counter = ({ count, displayError }) => {
  return (
    <div>
      <h1>Current value is: {count} </h1>
      <button
        name="error"
        onClick={() =>
          displayError({ error: 'Test', message: 'Test message' })
        }>
        Display Error
      </button>
    </div>
  );
};

// Map Counter State to Counter component
export default connect(
  state => state.counter,
  dispatch => {
    return {
      displayError: payload => dispatch({ type: 'DISPLAY_ERROR', payload }),
    };
  },
)(Counter);
