import React from 'react';
import Routes from '../routes';
import { ConnectedRouter } from 'connected-react-router';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
};

export default App;
