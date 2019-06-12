import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './index.scss';

const Home = () => {
  return (
    <Jumbotron>
      <div className="wrapper">
        <h1>Hello, Welcome!</h1>
        <p>
          This template was created using React + Redux with some other
          integration libraries such as React-Router for handling routing,
          Redux-saga for handling side effects (eg: network request) and also
          React bootstrap for styling pages.
        </p>
        <Button variant="secondary">Learn more</Button>
      </div>
    </Jumbotron>
  );
};

export default Home;
