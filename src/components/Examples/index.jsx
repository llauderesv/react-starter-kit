import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Counter from './Counter';
import DisplayErrorMessage from './DispatchErrorMessage';
import User from './User';
import EnhancedHelloWorld from './HigherOrderComponent';

const Examples = () => {
  return (
    <Container>
      <h1>Example usage in React + Redux</h1>
      <Jumbotron>
        <Row>
          <Col>
            <h2>Counter</h2>
            <p>
              Description: This counter sample is dispatching action using inc
              and dec with incAsync using redux + saga
            </p>
            <Counter />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row>
          <Col>
            <h2>Displaying error message</h2>
            <p>
              Description: Notify your user that has an error occurred in web
              app. You could use this while you're fetching and eventually an
              error.
            </p>
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
            <p>Description: Fetching data using redux saga</p>
            <User />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row>
          <Col>
            <h2>
              Higher Order Component using compose helper function in
              react-redux library
            </h2>
            <p>Try me!</p>
            <p>
              Description: This sample is randomly throwing an error. Once there
              was an error you can also retry fetching the data.
            </p>
            <EnhancedHelloWorld />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Examples;
