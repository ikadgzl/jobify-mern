import { useState } from 'react';
import { Logo, FormRow } from '../components/';
import Wrapper from '../wrappers/RegisterPage';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const [user, setUser] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>

        <FormRow
          type='text'
          name='name'
          handleChange={handleChange}
          value={user.name}
        />
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

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
