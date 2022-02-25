import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAppContext();

  return user ? children : <Navigate to='/landing' />;
};

export default PrivateRoute;
