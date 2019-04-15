import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import * as counter from './counter';
import * as error from './error';

const rootReducers = history =>
  combineReducers({
    counter: counter.reducer,
    error: error.reducer,
    router: connectRouter(history),
  });

export default rootReducers;
