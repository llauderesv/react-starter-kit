import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// Import all app reducers...
import * as counter from './counter';
import * as error from './error';

// Add all your app reducers here
// In combine reducers
const rootReducers = history =>
  combineReducers({
    counter: counter.reducer,
    error: error.reducer,
    router: connectRouter(history),
  });

export default rootReducers;
