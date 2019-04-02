const incrementCountType = 'INC';
const decrementCountType = 'DEC';
const initialState = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType }),
};

export const reducer = (state = initialState, action) => {
  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.count - 1 };
  }

  return state;
};
