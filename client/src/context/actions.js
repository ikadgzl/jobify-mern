//TODO: separate actions and action creators.

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggle = () => ({
  type: TOGGLE_SIDEBAR
});

// ###

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

// ###

export const LOGOUT_USER = 'LOGOUT_USER ';

export const logout = () => ({ type: LOGOUT_USER });

// ###

export const UPDATE_USER_BEGIN = 'UPDATE_USER_BEGIN';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const updateBegin = () => ({ type: UPDATE_USER_BEGIN });

export const updateSuccess = (user, token, location) => ({
  type: UPDATE_USER_SUCCESS,
  payload: { user, token, location }
});

export const updateError = () => ({
  type: UPDATE_USER_ERROR
});

// ###

export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const handleChangeAction = ({ name, value }) => ({
  type: HANDLE_CHANGE,
  payload: { name, value }
});

// ###

export const CLEAR_VALUES = 'CLEAR_VALUES';

export const clearValuesAction = () => ({
  type: CLEAR_VALUES
});

// ###

export const CREATE_JOB_BEGIN = 'CREATE_JOB_BEGIN';
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS';
export const CREATE_JOB_ERROR = 'CREATE_JOB_ERROR';

export const createJobBegin = () => ({ type: CREATE_JOB_BEGIN });

export const createJobSuccess = () => ({
  type: CREATE_JOB_SUCCESS
});

export const createJobError = () => ({
  type: CREATE_JOB_ERROR
});

// ###

export const GET_JOBS_BEGIN = 'GET_JOBS_BEGIN';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';

export const getJobsBegin = () => ({
  type: GET_JOBS_BEGIN
});

export const getJobsSuccess = (payload) => ({
  type: GET_JOBS_SUCCESS,
  payload
});
