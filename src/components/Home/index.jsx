import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1>Welcome to React + Redux + React router Template</h1>
        <p>
          This template consist of following integration with React + Redux with
          the help of React Router and React Saga for handling side effects.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </Fragment>
  );
};

export default Home;
