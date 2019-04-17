import { put, takeEvery, call } from 'redux-saga/effects';
import { incrementCounter, INC_COUNTER_ASYNC } from '../actionCreators/counter';

// Set a delay utility function...
export const delay = seconds => new Promise(res => setTimeout(res, seconds));

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(incrementCounter());
}

export default function* watchIncrementAsync() {
  yield takeEvery(INC_COUNTER_ASYNC, incrementAsync);
}
