import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../configureStore';
import routes from '../../routes';

import './index.scss';

const App = ({ browserHistory }) => {
  const routesArray = routes.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <ConnectedRouter history={browserHistory}>
      <HashRouter hashType="noslash">
        <Switch>{routesArray}</Switch>
      </HashRouter>
    </ConnectedRouter>
  );
};

App.propTypes = {
  browserHistory: PropTypes.instanceOf(history).isRequired,
};

export default App;
