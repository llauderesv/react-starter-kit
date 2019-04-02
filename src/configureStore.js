import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducers from './reducers';

export const history = createBrowserHistory();

const configureStore = initialState => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducers(history),
    initialState, // Set the initial State in the app
    composeEnhancer(applyMiddleware(...middlewares))
  );
};

export default configureStore;
