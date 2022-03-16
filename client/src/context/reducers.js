import {
  CLEAR_ALERT,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_ERROR,
  CREATE_JOB_SUCCESS,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  HANDLE_CHANGE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SHOW_ALERT,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS
} from './actions';

// TODO: separate reducers.
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

    case UPDATE_USER_BEGIN:
      return { ...state, isLoading: true };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location
      };

    case UPDATE_USER_ERROR:
      return { ...state, isLoading: false };

    case TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar };

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        userLocation: null,
        jobLocation: null,
        token: null
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case CLEAR_VALUES:
      return {
        ...state,
        isEditing: false,
        editJobId: null,
        position: '',
        company: '',
        jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
        jobType: 'full-time',
        statusOptions: ['pending', 'interview', 'declined'],
        status: 'pending'
      };

    case CREATE_JOB_BEGIN:
      return { ...state, isLoading: true };

    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case CREATE_JOB_ERROR:
      return { ...state, isLoading: false };

    case GET_JOBS_BEGIN:
      return { ...state, isLoading: true };

    case GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages
      };

    default:
      break;
  }
};
