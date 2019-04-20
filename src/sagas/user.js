import { call, takeEvery, put } from 'redux-saga/effects';
import {
  USER_FETCH_REQUESTED,
  userFetchSuccess,
  userFetchError,
} from '../actionCreators/user';
import { delay } from '../utils';

import userData from '../data/user.json';

export function* fetchUser() {
  try {
    // Get the from local json file...
    const data = { data: userData };

    yield call(delay, 5000);
    yield put(userFetchSuccess(data));
  } catch (error) {
    yield put(userFetchError());
  }
}

export default function* watchFetchUser() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}
