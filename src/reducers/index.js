import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import * as counter from './counter';

const rootReducers = history =>
  combineReducers({
    counter: counter.reducer,
    router: connectRouter(history),
  });

export default rootReducers;
