import { createContext, useContext, useReducer } from 'react';
import { clearAlert, showAlert } from './actions';
import { appReducer } from './reducers';

const INITIAL_STATE = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
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

  return (
    <AppContext.Provider value={{ state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
