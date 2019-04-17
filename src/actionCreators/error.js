// Actions...
export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

// Action creators...
export function showError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function hideError() {
  return { type: HIDE_ERROR };
}
