import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const withLoader = WrappedComponent => ({ isLoading, ...restProps }) => {
  return isLoading ? (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h1 style={{ display: 'inline-block', margin: '0 10px 0 10px' }}>
        Loading...
      </h1>
    </div>
  ) : (
    <WrappedComponent {...restProps} />
  );
};

export default withLoader;
