import 'babel-polyfill';
import { put, call } from 'redux-saga/effects';
import { fetchUser, delay } from '../user';
import { userFetchSuccess } from '../../actionCreators/user';
import userData from '../../data/user.json';

describe('User Saga Tests', () => {
  it('fetchUser Saga test', () => {
    // This will return a plain objects
    // {done: false, value: (The yielded value)}
    const gen = fetchUser();

    // Gen next value will return the yielded function/value
    expect(gen.next().value).toEqual(call(delay, 5000));

    expect(gen.next().value).toEqual(put(userFetchSuccess({ data: userData })));
    // Increment saga must be done...
    expect(gen.next().value).toBeUndefined();
  });
});
