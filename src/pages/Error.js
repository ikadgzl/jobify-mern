import Wrapper from '../wrappers/ErrorPage';
import notFound from '../assets/images/not-found.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate('/');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Wrapper className='full-page'>
      <img src={notFound} alt='not found' />
      <h3>Page not found!</h3>
      <p>We can't seem to find the page you're looking for.</p>

      <Link to='/'>Click here if you're not redirected</Link>
    </Wrapper>
  );
};

export default Error;
