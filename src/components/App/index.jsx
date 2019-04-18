import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../routes';

// Component section
import Navbar from '../Navbar';
import ErrorMessage from '../ErrorMessage';

import './index.scss';

const App = ({ browserHistory }) => {
  const routesArray = routes.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <ConnectedRouter history={browserHistory}>
      <Fragment>
        <Navbar />
        <ErrorMessage />
        <div className="app-content">
          <Switch>{routesArray}</Switch>
        </div>
      </Fragment>
    </ConnectedRouter>
  );
};

App.propTypes = {
  browserHistory: PropTypes.object.isRequired,
};

export default App;
