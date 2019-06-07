import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './index.scss';

const Home = _ => {
  return (
    <Jumbotron>
      <div className="wrapper">
        <h1>Welcome!</h1>
        <p>
          This template was built using react and redux with integration of
          other libraries such as react router for handling routes, redux saga
          for handling side effects (network request), react bootstrap for
          styling.
        </p>
        <Button variant="secondary">Learn more</Button>
      </div>
    </Jumbotron>
  );
};

export default Home;
