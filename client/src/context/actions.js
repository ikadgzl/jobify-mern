// ACTIONS
export const SHOW_ALERT = 'SHOW_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

// ACTION CREATORS
export const showAlert = (type, text) => ({
  type: SHOW_ALERT,
  payload: { type, text }
});

export const clearAlert = () => ({
  type: CLEAR_ALERT
});
