import { FaTimes } from 'react-icons/fa';
import Wrapper from '../wrappers/SmallSidebar';
import Logo from '../components/Logo';
import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
  const { state, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${
          state.showSidebar ? 'show-sidebar' : ''
        }`}
      >
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
