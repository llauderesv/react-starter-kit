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
          This template is created using react and redux with some integration
          of other libraries such as react-router for handling routing,
          redux-saga for handling side effects (eg: network request) and also react
          bootstrap for styling pages.
        </p>
        <Button variant="secondary">Learn more</Button>
      </div>
    </Jumbotron>
  );
};

export default Home;
