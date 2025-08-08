import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      {/* Navbar Start */}
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            {/* Hamburger icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/browse'}>Browse</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Center */}
      <div className='navbar-center'>
        <Link to={"/"} className='btn btn-ghost text-xl font-playwrite'>Superverse</Link>
      </div>

      {/* Navbar End */}
      <div className='navbar-end'>
        {/* Search Button */}
        {/* <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />{' '}
              </svg>
            </div>
          </div>
          <div
            tabIndex={0}
            className='card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow'
          >
            <div className='card-body'>
              <span className='text-lg font-bold'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div> */}

        <button className='btn btn-ghost btn-circle'>
          <div>
            <img className='w-8' src={userIcon} alt='user icon' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
