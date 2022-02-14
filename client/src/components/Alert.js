import { useAppContext } from '../context/appContext';

// TODO: assess if you need props or global state to render
const Alert = () => {
  const { state } = useAppContext();
  return (
    <div className={`alert alert-${state.alertType}`}>{state.alertText}</div>
  );
};

export default Alert;
