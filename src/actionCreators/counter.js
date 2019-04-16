//  Actions...
export const INC_COUNTER = 'INC_COUNTER';
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
