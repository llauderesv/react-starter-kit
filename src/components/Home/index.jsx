import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './index.scss';

const Home = () => {
  return (
    <Fragment>
      <Jumbotron>
        <div className="wrapper">
          <h1>Hello World!</h1>
          <p>
            This new template was built using react + redux with the integration
            of other libraries such as react router for handling Single Page
            Application and redux saga for handling side effects and react
            bootstrap for styling.
          </p>
          <Button variant="secondary">Learn more</Button>
        </div>
      </Jumbotron>
    </Fragment>
  );
};

export default Home;
