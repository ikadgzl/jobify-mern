import { createContext, useContext, useReducer } from 'react';
import { addToLocalStorage, deleteLocalStorage } from './utils';
import {
  clearAlert,
  registerBegin,
  registerError,
  registerSuccess,
  showAlert
} from './actions';
import { appReducer } from './reducers';
import axios from 'axios';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const location = localStorage.getItem('location');

const INITIAL_STATE = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: location || '',
  jobLocation: location || ''
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

  return (
    <AppContext.Provider value={{ state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
