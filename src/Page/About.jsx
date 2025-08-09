import Aos from 'aos';
import ironTorch from '../assets/1_Human_Torch.png';
import superMan from '../assets/2_Supermanflying.png';
import antMan from '../assets/3_ant_man.jpg';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='overflow-hidden font-roboto'>
      {/* hero section */}
      <section className='bg-stone-900 text-white py-10 text-center'>
        <h1 className='text-4xl font-bold mb-2'>About Superverse</h1>
        <p className='text-lg opacity-80'>
          Your gateway to the multiverse of heroes.
        </p>
      </section>

      {/* app short description */}
      <section className='max-w-4xl mx-auto p-6 text-center'>
        <p className='mb-4 text-gray-700'>
          Superverse is a fan-made superhero database powered by the{' '}
          <a
            href='https://superhero-api.innovixmatrixsystem.com/api-docs'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 underline'
          >
            IMS_SuperHero API v1
          </a>
          . Explore heroes from Marvel, DC, and beyond &rarr; search, sort, and
          discover amazing characters with detailed stats and images with
          pagination system.
        </p>
      </section>

      {/* grid card icon */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-6 text-stone-800'>
        <div className='bg-orange-300 p-5 rounded-lg shadow-md text-center hover:scale-[0.98] transition-all hover:bg-orange-200'>
          <span className='text-3xl'>🦸</span>
          <h3 className='font-bold mt-2'>Browse Heroes</h3>
          <p className='text-sm opacity-80'>
            View hundreds of superheroes in a beautiful card layout & pagination
            system.
          </p>
        </div>

        <div className='bg-cyan-300 p-5 rounded-lg shadow-md text-center hover:scale-[0.98] transition-all hover:bg-cyan-200'>
          <span className='text-3xl'>🔍</span>
          <h3 className='font-bold mt-2'>Search by Name</h3>
          <p className='text-sm opacity-80'>
            Find your favorite hero instantly using the search bar by their
            name.
          </p>
        </div>

        <div className='bg-rose-300 p-5 rounded-lg shadow-md text-center hover:scale-[0.98] transition-all hover:bg-rose-200'>
          <span className='text-3xl'>📊</span>
          <h3 className='font-bold mt-2'>Detailed Stats</h3>
          <p className='text-sm opacity-80'>
            View powers, abilities, and biography details.
          </p>
        </div>
      </section>

      {/* fun fact section */}
      <section className='flex items-center justify-center gap-2 mt-5 mb-10 animate__animated animate__pulse animate__slower	animate__infinite	infinite'>
        <div className='inline-grid *:[grid-area:1/1]'>
          <div className='status status-success animate-ping'></div>
          <div className='status status-success'></div>
        </div>{' '}
        <p className='text-2xl font-playwrite'>Fun Facts About Superheros</p>
      </section>

      <div data-aos="fade-right" className='lg:mx-36 mb-15'>
        {/* 1 */}
        <div className='collapse collapse-plus bg-base-100 border border-base-300'>
          <input type='radio' name='my-accordion-3' defaultChecked />
          <div className='collapse-title font-semibold'>
            The Human Torch (First marvel superhero)
          </div>
          <div className='collapse-content text-sm flex flex-row items-center gap-2'>
            <img
              className='w-16 h-16 object-contain rounded-full border border-stone-300 shadow-sm'
              src={ironTorch}
              alt='The Human Torch'
            />
            <p>
              The first superhero created by Timely Comics (later Marvel). Not
              to be confused with the Fantastic Four’s Human Torch in 1939.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className='collapse collapse-plus bg-base-100 border border-base-300'>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title font-semibold'>
            Superman (First D.C superhero)
          </div>
          <div className='collapse-content text-sm flex flex-row items-center gap-2'>
            <img
              className='w-16 h-16 object-contain rounded-full border border-stone-300 shadow-sm'
              src={superMan}
              alt='Superman'
            />
            <p>
              Created by Jerry Siegel and Joe Shuster, Superman set the standard
              for the superhero genre in 1938.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className='collapse collapse-plus bg-base-100 border border-base-300'>
          <input type='radio' name='my-accordion-3' />
          <div className='collapse-title font-semibold'>
            Ant Man (The Smallest Big Hero)
          </div>
          <div className='collapse-content text-sm flex flex-row items-center gap-2'>
            <img
              className='w-16 h-16 object-contain rounded-full border border-stone-300 shadow-sm'
              src={antMan}
              alt='Ant man'
            />
            <p>
              Ant-Man once punched the Hulk… while tiny. It didn’t hurt Hulk
              much, but it made for one of the funniest panels in comic history
              😂.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
