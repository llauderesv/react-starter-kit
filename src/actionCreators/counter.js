//  Actions...
export const INC_COUNTER = 'INC_COUNTER';
export const INC_COUNTER_ASYNC = 'INC_COUNTER_ASYNC';
export const DEC_COUNTER = 'DEC_COUNTER';

// Action creators...
export function incrementCounter() {
  return {
    type: INC_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DEC_COUNTER,
  };
}

export function incrementAsyncCounter() {
  return { type: INC_COUNTER_ASYNC };
}
