import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from '../Counter';

const Routes = () => {
  return (
    <Switch>
      <Route path="/counter/:id?" component={Counter} />
    </Switch>
  );
};

export default Routes;
