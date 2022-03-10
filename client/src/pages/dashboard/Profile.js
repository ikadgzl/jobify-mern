import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../wrappers/DashboardFormPage';
import { FormRow, Alert } from '../../components';

const Profile = () => {
  const {
    state: { user, isLoading, showAlert },
    displayAlert,
    updateUser
  } = useAppContext();

  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || ''
  });

  const handleChange = (e) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.lastName ||
      !userInfo.location
    ) {
      displayAlert('danger', 'Please provide all the credentials.');

      return;
    }

    updateUser(userInfo);
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}

        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userInfo.name}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userInfo.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='lastName'
            value={userInfo.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userInfo.location}
            handleChange={handleChange}
          />

          <button className='btn btn-block' type='submit' disabled={isLoading}>
            Submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
