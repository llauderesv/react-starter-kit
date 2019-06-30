import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const errorMessagePropTypes = {
  message: PropTypes.string,
  hideError: PropTypes.func,
  children: PropTypes.element,
};

const ErrorMessage = ({ message, hideError, children, ...restProps }) => {
  return (
    <Alert variant="danger" onClose={hideError} {...restProps}>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{message}</p>
      {children}
    </Alert>
  );
};

ErrorMessage.propTypes = errorMessagePropTypes;

export default ErrorMessage;
