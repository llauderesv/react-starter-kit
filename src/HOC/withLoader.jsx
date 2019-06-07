import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h1 style={{ display: 'inline-block', margin: '0 10px 0 10px' }}>
        Loading...
      </h1>
    </div>
  );
};

const withLoader = WrappedComponent => ({ isLoading, ...restProps }) => {
  return isLoading ? <Loader /> : <WrappedComponent {...restProps} />;
};

export default withLoader;
