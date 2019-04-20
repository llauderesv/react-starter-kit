import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Components section
import Counter from './Counter';
import DisplayErrorMessage from './DispatchErrorMessage';
import User from './User';
import EnhancedHelloWorld from './HigherOrderComponent';

const Examples = () => {
  return (
    <Container>
      <h1 style={{ margin: '10px' }}>Examples</h1>
      <Jumbotron>
        <Row>
          <Col>
            <h2>Counter</h2>
            <p>
              Description: This counter is sample of dispatching action with
              changing the state of the app and updating the reducer in your
              store.
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
              Description: Notify your user when there was a problem in your
              network connectivity and display it in your web app.
            </p>
            <DisplayErrorMessage />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row>
          <Col>
            <h2>Fetching data in web service</h2>
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
