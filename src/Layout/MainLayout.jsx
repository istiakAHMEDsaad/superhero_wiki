import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='lg:max-w-7xl md:max-w-screen-md max-w-sm mx-auto'>
      <Navbar />
      <div className='min-h-[calc(100vh-284px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
