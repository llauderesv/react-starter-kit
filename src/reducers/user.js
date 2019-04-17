import {
  USER_FETCH_SUCCESS,
  USER_FETCH_ERROR,
  USER_FETCH_REQUESTED,
} from '../actionCreators/user';

const initialState = { data: [], isFetching: false };

const reducer = (state = initialState, action) => {
  if (action.type === USER_FETCH_REQUESTED) {
    return { ...state, isFetching: true };
  }

  if (action.type === USER_FETCH_SUCCESS) {
    return { ...state, data: action.payload.data, isFetching: false };
  }

  if (action.type === USER_FETCH_ERROR) {
    return { ...state, isFetching: false };
  }

  return state;
};

export default reducer;
