import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function withLoader(WrappedComponent) {
  function Loader({ isLoading, ...restProps }) {
    console.log(isLoading);
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
  }

  return Loader;
}
