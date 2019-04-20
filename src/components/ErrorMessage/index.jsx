import React from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorMessage = ({ message, hideError, children, ...restProps }) => {
  return (
    <Alert variant="danger" onClose={hideError} {...restProps}>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{message}</p>
      {children}
    </Alert>
  );
};

export default ErrorMessage;
