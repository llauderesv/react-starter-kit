import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import routes from '../../routes';

import Navbar from '../Navbar';
import Container from 'react-bootstrap/Container';
import ErrorMessage from '../ErrorMessage';

// import './index.scss';

const App = ({ browserHistory, error }) => {
  const routesArray = routes.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <ConnectedRouter history={browserHistory}>
      <Fragment>
        <Navbar />
        <ErrorMessage />
        <Container>
          <Switch>{routesArray}</Switch>
        </Container>
      </Fragment>
    </ConnectedRouter>
  );
};

App.propTypes = {
  browserHistory: PropTypes.object.isRequired,
};

export default connect(state => ({ error: state.error }))(App);
