import { useState, useEffect } from 'react';
import Aos from 'aos';
import axios from 'axios';

import { Slide, toast } from 'react-toastify';
import LimitedCard from '../Components/LimitedCard';
import Carousel from '../Components/Carousel';
import { Link } from 'react-router-dom';
import { GiBatMask } from 'react-icons/gi';

const Home = () => {
  // aos
  useEffect(() => {
    Aos.init();
  }, []);

  const [heroinfo, setHeroinfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLimitData = async () => {
      try {
        const res = await axios.get(
          'https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records?perPage=6'
        );
        setHeroinfo(res?.data?.items || []);
      } catch (err) {
        console.error(err?.message || 'Failed to fetch data');
        toast.error(`${err?.message}`, {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchLimitData();
  }, []);

  return (
    <div className='font-roboto flex flex-col overflow-hidden'>
      <div className='my-5'>
        <Carousel />
      </div>

      {/* loading */}
      <div className='flex flex-col items-center justify-center mb-5'>
        {loading && (
          <span className='loading loading-spinner text-error loading-xl'></span>
        )}

        <p className='py-5 lg:text-4xl md:text-3xl text-2xl text-gray-700 flex items-center justify-center animate__animated animate__flash animate__slower	animate__infinite	infinite'>
          Meet our superhero <GiBatMask />
        </p>
        <div
          data-aos='fade-right'
          className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'
        >
          {heroinfo?.map((hero, idx) => (
            <LimitedCard key={idx} hero={hero} />
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center my-5'>
        <Link to={'/Browse'} className='btn btn-neutral'>
          Show more!
        </Link>
      </div>
    </div>
  );
};

export default Home;
