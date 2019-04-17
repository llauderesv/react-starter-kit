import { SHOW_ERROR, HIDE_ERROR } from '../actionCreators/error';

const initialState = { stackTrace: null, message: null, isShow: false };

const reducer = (state = initialState, action) => {
  if (action.type === SHOW_ERROR) {
    const { error, message } = action.payload; // Get the Error data in payload...

    return { isShow: true, stackTrace: error, message };
  }

  if (action.type === HIDE_ERROR) {
    return { ...state, isShow: false };
  }

  // If there's no match in the condition return the initial state...

  return state;
};

export default reducer;
