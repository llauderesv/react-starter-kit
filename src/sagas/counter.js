import { put, takeEvery, call } from 'redux-saga/effects';
import { incrementCounter, INC_COUNTER_ASYNC } from '../actionCreators/counter';

// Set a delay utility function...
export const delay = seconds => {
  return new Promise(res => {
    return setTimeout(res, seconds);
  });
};

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(incrementCounter());
}

// Create an observer for every dispatch INC_COUNTER_ASYNC
// It will call the incrementAsync generator function
export default function* watchIncrementAsync() {
  yield takeEvery(INC_COUNTER_ASYNC, incrementAsync);
}
