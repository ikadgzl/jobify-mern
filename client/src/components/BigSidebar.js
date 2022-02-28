import { useAppContext } from '../context/appContext';
import Wrapper from '../wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';

const BigSidebar = () => {
  const { state } = useAppContext();

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${
          state.showSidebar ? '' : 'show-sidebar'
        }`}
      >
        <div className='content'>
          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
