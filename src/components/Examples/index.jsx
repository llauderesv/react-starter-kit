import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Counter from './Counter';
import DisplayErrorMessage from './DispatchErrorMessage';
import User from './User';

const Examples = () => {
  return (
    <Container>
      <h1>Example usage in React + Redux</h1>
      <Jumbotron>
        <Row>
          <Col>
            <h2>Counter</h2>
            <p>Try me!</p>
            <Counter />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row>
          <Col>
            <h2>Dispatching global error message</h2>
            <p>Try me!</p>
            <DisplayErrorMessage />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row>
          <Col>
            <h2>
              Fetching data using Redux saga and storing it in redux store
            </h2>
            <p>Try me!</p>
            <User />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Examples;
