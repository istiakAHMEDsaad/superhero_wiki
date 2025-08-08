import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
  return (
    <div className='lg:max-w-7xl md:max-w-screen-md max-w-sm mx-auto'>
        <Navbar/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
