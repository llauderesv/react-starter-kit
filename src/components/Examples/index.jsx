import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Counter from './Counter';
import DisplayErrorMessage from './DispatchErrorMessage';

const Examples = () => {
  return (
    <Container>
      <h1>Example of usage in react + redux</h1>
      <Row>
        <Col>
          <h2>Counter</h2>
          <Counter />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Dispatching Error message</h2>
          <DisplayErrorMessage />
        </Col>
      </Row>
    </Container>
  );
};

export default Examples;
