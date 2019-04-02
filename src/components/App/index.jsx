import React from 'react';
import Routes from '../routes';
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter } from 'react-router-dom';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <HashRouter hashType="noslash">
        <Routes />
      </HashRouter>
    </ConnectedRouter>
  );
};

export default App;
