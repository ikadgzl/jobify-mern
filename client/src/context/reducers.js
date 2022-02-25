import {
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SHOW_ALERT
} from './actions';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.type,
        alertText: action.payload.text
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: ''
      };

    case REGISTER_USER_BEGIN:
      return { ...state, isLoading: true };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location
      };

    case REGISTER_USER_ERROR:
      return { ...state, isLoading: false };

    case LOGIN_USER_BEGIN:
      return { ...state, isLoading: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location
      };

    case LOGIN_USER_ERROR:
      return { ...state, isLoading: false };

    default:
      break;
  }
};
