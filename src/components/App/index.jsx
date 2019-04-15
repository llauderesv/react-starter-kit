import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../configureStore';
import routes from '../../routes';
import { connect } from 'react-redux';

import './index.scss';

const App = ({ browserHistory, error }) => {
  const routesArray = routes.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <ConnectedRouter history={browserHistory}>
      <div>
        {error.message && <h1>{error.message}</h1>}
        <HashRouter hashType="noslash">
          <Switch>{routesArray}</Switch>
        </HashRouter>
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  browserHistory: PropTypes.instanceOf(history).isRequired,
};

export default connect(state => ({ error: state.error }))(App);
