import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from '../Counter';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/hello/:id?" component={Counter} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
