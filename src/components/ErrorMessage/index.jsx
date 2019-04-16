import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';

const ErrorMessage = ({ error, hideError }) => {
  const { isShow } = error;

  return (
    isShow && (
      <Alert variant="danger" onClose={hideError} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{error.message}</p>
      </Alert>
    )
  );
};

export default connect(
  state => ({ error: state.error }),
  dispatch => ({
    hideError: () => dispatch({ type: 'HIDE_ERROR' }),
  }),
)(ErrorMessage);
