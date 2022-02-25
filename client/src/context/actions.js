export const SHOW_ALERT = 'SHOW_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

export const showAlert = (type, text) => ({
  type: SHOW_ALERT,
  payload: { type, text }
});

export const clearAlert = () => ({
  type: CLEAR_ALERT
});

// ###

export const REGISTER_USER_BEGIN = 'REGISTER_USER_BEGIN';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const registerBegin = () => ({ type: REGISTER_USER_BEGIN });

export const registerSuccess = (user, token, location) => ({
  type: REGISTER_USER_SUCCESS,
  payload: { user, token, location }
});

export const registerError = () => ({
  type: REGISTER_USER_ERROR
});

// ###

export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const loginBegin = () => ({ type: LOGIN_USER_BEGIN });

export const loginSuccess = (user, token, location) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user, token, location }
});

export const loginError = () => ({
  type: LOGIN_USER_ERROR
});
