import { useState } from 'react';
import { Logo, FormRow, Alert } from '../components/';
import { useAppContext } from '../context/appContext';
import Wrapper from '../wrappers/RegisterPage';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const [user, setUser] = useState(INITIAL_STATE);

  const { state, displayAlert, registerUser } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleToggle = () => {
    setUser((prevUser) => ({ ...prevUser, isMember: !prevUser.isMember }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password || (!user.isMember && !user.name)) {
      displayAlert('danger', 'Please provide all the informations.');

      return;
    }

    if (user.isMember) {
      console.log('already member');
    } else {
      registerUser({
        name: user.name,
        email: user.email,
        password: user.password
      });

      setInterval(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{user.isMember ? 'Login' : 'Register'}</h3>

        {state.showAlert && <Alert />}

        {!user.isMember && (
          <FormRow
            type='text'
            name='name'
            handleChange={handleChange}
            value={user.name}
          />
        )}

        <FormRow
          type='email'
          name='email'
          handleChange={handleChange}
          value={user.email}
        />
        <FormRow
          type='password'
          name='password'
          handleChange={handleChange}
          value={user.password}
        />

        <button
          type='submit'
          className='btn btn-block'
          disabled={state.isLoading}
        >
          {user.isMember ? 'Login' : 'Submit'}
        </button>

        <p>
          {user.isMember ? "Don't have an account?" : 'Got an account?'}

          <span className='member-btn' type='button' onClick={handleToggle}>
            {user.isMember ? 'Register' : 'Login'}
          </span>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
