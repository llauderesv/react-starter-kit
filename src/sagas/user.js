import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import {
  USER_FETCH_REQUESTED,
  userFetchSuccess,
  userFetchError,
} from '../actionCreators/user';

import userData from '../data/user.json';

export const delay = seconds => new Promise(res => setTimeout(res, seconds));

export function* fetchUser() {
  try {
    // const data = call(axios.get, '')
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
