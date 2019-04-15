const displayError = 'DISPLAY_ERROR';
const hideError = 'HIDE_ERROR';

const initialState = { stackTrace: null, message: null, isShow: false };

export const actionCreators = {
  displayError: payload => ({ type: displayError, payload }),
  hideError: () => ({ type: hideError }),
};

export const reducer = (state = initialState, action) => {
  if (action.type === displayError) {
    const { error, message } = action.payload; // Get the Error data in payload...

    return { isShow: true, stackTrace: error, message };
  }

  if (action.type === hideError) {
    return { ...state, isShow: false };
  }

  // If there's no match in the condition return the initial state...

  return state;
};
