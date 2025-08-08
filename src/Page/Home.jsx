import { useState, useEffect } from 'react';
import Aos from 'aos';
import SlideFlow from '../Components/SlideFlow';
import { Slide, toast } from 'react-toastify';
import LimitedCard from '../Components/LimitedCard';

const Home = () => {
  // aos
  useEffect(() => {
    Aos.init();
  }, []);

  const [heroinfo, setHeroinfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records?perPage=6'
    )
      .then((res) => res.json())
      .then((data) => {
        setHeroinfo(data?.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('something not right:', err);
        toast.error('data fetch error', {
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
        setLoading(false);
      });
  }, []);

  return (
    <div className='font-roboto flex flex-col overflow-hidden'>
      <div className='my-5'>
        <SlideFlow />
      </div>

      {/* loading */}
      <div className='flex flex-col items-center justify-center mb-5'>
        {loading && (
          <span className='loading loading-spinner text-error loading-xl'></span>
        )}

        <p className='py-5 text-3xl animate__animated animate__flash animate__slower	animate__infinite	infinite'>
          Meet our superhero
        </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
          {heroinfo?.map((hero, idx) => (
            <LimitedCard key={idx} hero={hero} />
          ))}
        </div>
      </div>
      
      <div className='flex items-center justify-center my-5'>
        <button className='btn btn-success'>Show more!</button>
      </div>
    </div>
  );
};

export default Home;
