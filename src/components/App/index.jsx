import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import routes from '../../routes';

// Component section
import Navbar from '../Navbar';
import ErrorMessage from '../ErrorMessage';

import './index.scss';

const ErrorMessageWithConnect = connect(
  state => ({ message: state.error.message }),
  dispatch => ({
    hideError: () => dispatch({ type: 'HIDE_ERROR' }),
  }),
)(ErrorMessage);

const App = ({ browserHistory, isShow }) => {
  const routesArray = routes.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <ConnectedRouter history={browserHistory}>
      <HashRouter>
        <div className="app-content">
          <Navbar />
          {isShow && <ErrorMessageWithConnect dismissible />}
          <Switch>{routesArray}</Switch>
        </div>
      </HashRouter>
    </ConnectedRouter>
  );
};

App.propTypes = {
  browserHistory: PropTypes.object.isRequired,
  isShow: PropTypes.bool.isRequired,
};

export default connect(state => ({ isShow: state.error.isShow }))(App);
