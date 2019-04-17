import { INC_COUNTER, DEC_COUNTER } from '../actionCreators/counter';

const initialState = { count: 0 };

// Reducer modifying counter state
const reducer = (state = initialState, action) => {
  if (action.type === INC_COUNTER) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === DEC_COUNTER) {
    return { ...state, count: state.count - 1 };
  }

  return state;
};

export default reducer;
