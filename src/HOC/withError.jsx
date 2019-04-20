import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function withError(WrappedComponent) {
  function Error({ error, fetchEvent, ...restProps }) {
    return error ? (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{error.message}</p>
        <Button variant="danger" onClick={fetchEvent}>
          Retry
        </Button>
      </Alert>
    ) : (
      <WrappedComponent {...restProps} />
    );
  }

  return Error;
}
