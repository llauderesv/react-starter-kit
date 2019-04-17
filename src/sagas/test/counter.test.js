import 'babel-polyfill';
import { call } from 'redux-saga/effects';
import { incrementAsync, delay } from '../counter';

describe('Counter Saga Tests', () => {
  it('incrementAsync Saga test', () => {
    // This will return a plain objects
    // {done: false, value: (The yielded value)}
    const gen = incrementAsync();

    // Gen next value will return the yielded function/value
    expect(gen.next().value).toMatchSnapshot();
    expect(gen.next().value).toMatchSnapshot();
    // Increment saga must be done...
    expect(gen.next().value).toMatchSnapshot();
  });
});
