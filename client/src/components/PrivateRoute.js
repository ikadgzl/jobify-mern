import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAppContext();

  // TODO:REMOVE THIS AFTER TEST
  return children;
  return user ? children : <Navigate to='/landing' />;
};

export default PrivateRoute;
