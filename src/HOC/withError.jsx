import React from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Button from 'react-bootstrap/Button';

const withError = WrappedComponent => ({ error, fetchEvent, ...restProps }) => {
  return error ? (
    <ErrorMessage message={error.message}>
      <Button variant="danger" onClick={fetchEvent}>
        Retry
      </Button>
    </ErrorMessage>
  ) : (
    <WrappedComponent {...restProps} />
  );
};

export default withError;
