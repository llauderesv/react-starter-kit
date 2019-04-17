export const USER_FETCH_REQUESTED = 'USER_FETCH';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_ERROR = 'USER_FETCH_ERROR';

export function userFetchRequested() {
  return {
    type: USER_FETCH_REQUESTED,
  };
}

export function userFetchSuccess(payload) {
  return {
    type: USER_FETCH_SUCCESS,
    payload,
  };
}

export function userFetchError() {
  return {
    type: USER_FETCH_ERROR,
  };
}
