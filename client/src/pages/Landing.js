import main from '../assets/images/main.svg';
import { Logo } from '../components';
import Wrapper from '../wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            doloremque tenetur qui sit non, animi et labore pariatur dolorem
            repellendus?
          </p>
          <button className='btn btn-hero'>Login / Register</button>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
