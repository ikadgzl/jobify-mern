import { createContext, useContext, useReducer } from 'react';
import { addToLocalStorage, deleteLocalStorage } from './utils';
import {
  clearAlert,
  clearValuesAction,
  createJobBegin,
  createJobError,
  createJobSuccess,
  handleChangeAction,
  loginBegin,
  loginError,
  loginSuccess,
  logout,
  registerBegin,
  registerError,
  registerSuccess,
  showAlert,
  toggle,
  updateBegin,
  updateError,
  updateSuccess
} from './actions';
import { appReducer } from './reducers';
import axios from 'axios';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const location = localStorage.getItem('location');

// TODO: create separate context for auth,jobs,sorting, etc.
const INITIAL_STATE = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  showSidebar: false,
  userLocation: location || '',
  jobLocation: location || '',
  isEditing: false,
  editJobId: null,
  position: '',
  company: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['pending', 'interview', 'declined'],
  status: 'pending'
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const displayAlert = (type, text) => {
    dispatch(showAlert(type, text));

    setTimeout(() => {
      dispatch(clearAlert());
    }, 2000);
  };

  const registerUser = async (userData) => {
    dispatch(registerBegin());

    try {
      const response = await axios.post('/api/v1/auth/register', userData);

      const { user, token, location } = response.data;

      dispatch(registerSuccess(user, token, location));
      displayAlert('success', 'Registered successfully! Redirecting...');

      addToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch(registerError());
      displayAlert('danger', error.response.data.msg);
    }
  };

  const loginUser = async (currentUser) => {
    dispatch(loginBegin());

    try {
      const response = await axios.post('/api/v1/auth/login', currentUser);

      const { user, token, location } = response.data;

      dispatch(loginSuccess(user, token, location));
      displayAlert('success', 'Logged in successfully! Redirecting...');

      addToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch(loginError());
      displayAlert('danger', error.response.data.msg);
    }
  };

  const logoutUser = () => {
    dispatch(logout());
    deleteLocalStorage();
  };

  const updateUser = async (userInfo) => {
    dispatch(updateBegin());

    try {
      const response = await axios.put('/api/v1/auth/update', userInfo, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      });

      const { user, token, location } = response.data;

      dispatch(updateSuccess(user, token, location));
      displayAlert('success', 'User updated successfully!');

      addToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch(updateError());
      displayAlert('danger', error.response.data.msg);
    }
  };

  const toggleSidebar = () => {
    dispatch(toggle());
  };

  const handleChange = (data) => {
    dispatch(handleChangeAction(data));
  };

  const clearValues = () => {
    dispatch(clearValuesAction());
  };

  const createJob = async () => {
    dispatch(createJobBegin());

    try {
      const { company, position, jobLocation, jobType, status } = INITIAL_STATE;

      await axios.post(
        '/api/v1/jobs',
        { company, position, jobLocation, jobType, status },
        {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }
      );

      dispatch(createJobSuccess());
      displayAlert('success', 'User updated successfully!');

      clearValues();
    } catch (error) {
      dispatch(createJobError());
      displayAlert('danger', error.response.data.msg);
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        displayAlert,
        registerUser,
        loginUser,
        updateUser,
        toggleSidebar,
        logoutUser,
        handleChange,
        clearValues,
        createJob
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
