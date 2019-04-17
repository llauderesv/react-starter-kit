import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// Import all app reducers...
import counter from './counter';
import error from './error';
import user from './user';

// Add all your app reducers here
// In combine reducers
const rootReducers = history =>
  combineReducers({
    counter,
    error,
    user,
    router: connectRouter(history),
  });

export default rootReducers;
