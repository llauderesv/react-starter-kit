import { all } from 'redux-saga/effects';

// Import all saga here...
import helloSaga from './hello';
import counterSaga from './counter';
import userSaga from './user';

// Root saga
export default function* rootSaga() {
  yield all([helloSaga(), counterSaga(), userSaga()]);
}
