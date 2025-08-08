import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HeroDetails = () => {
  const { id: heroId } = useParams();
  const [singleHero, setSingleHero] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(
          `https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/${heroId}`
        );
        setSingleHero(res.data);
      } catch (err) {
        console.error(err.message || 'Failed to fetch hero');
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

    if (heroId) {
      fetchHero();
    }
  }, [heroId]);

  if (loading) {
    <div className='flex items-center justify-center'>
      <span className='loading loading-spinner loading-xl text-error'></span>
    </div>;
  }

  return (
    <div className='font-roboto mb-10 overflow-hidden'>
      <div className='mt-5 mb-10'>
        <Link to={-1} className='btn btn-soft'>
          <FaArrowLeft />
          Back
        </Link>
      </div>

      <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
        <div className='md:basis-[40%]'>
          <img
            className=' w-full rounded-2xl'
            src={singleHero?.image?.url}
            alt={singleHero?.name}
          />
        </div>

        <div className='md:basis-[55%] text-xl'>
          <p className='font-bold flex items-center gap-1 font-playwrite text-2xl underline'>
            General info <FaArrowRight />
          </p>

          <p className='font-bold text-stone-700'>
            Name: <span className='font-normal'>{singleHero?.name}</span>
          </p>

          <p className='font-bold text-stone-700'>
            Real Name:{' '}
            <span
              className={`font-normal ${
                singleHero?.biography?.['full-name'] == '' ? 'text-red-500' : ''
              }`}
            >
              {singleHero?.biography?.['full-name'] == ''
                ? 'Unknown?'
                : singleHero?.biography?.['full-name']}
            </span>
          </p>

          <p className={`font-bold text-stone-700`}>
            Aliases:{' '}
            {singleHero?.biography?.aliases?.map((item, idx) => (
              <span
                className={`font-normal ${item == '-' ? 'text-red-500' : ''}`}
                key={idx}
              >
                {item == '-' ? 'Unknown?' : item}
              </span>
            ))}
          </p>

          <p className='font-bold text-stone-700'>
            publisher:{' '}
            <span className='font-normal'>
              {singleHero?.biography?.publisher}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            First Appearance:{' '}
            <span className='font-normal'>
              {singleHero?.biography?.['first-appearance']}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Gender:{' '}
            <span className='font-normal'>
              {singleHero?.appearance?.gender}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Race:{' '}
            <span
              className={`font-normal ${
                singleHero?.appearance?.race == 'null' ? 'text-red-500' : ''
              }`}
            >
              {singleHero?.appearance?.race == 'null'
                ? 'Unknown?'
                : singleHero?.appearance?.race}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Height:{' '}
            <span
              className={`font-normal ${
                singleHero?.appearance?.height[1] == '0 cm'
                  ? 'text-red-500'
                  : ''
              }`}
            >
              {singleHero?.appearance?.height[1] == '0 cm'
                ? 'Unknown?'
                : singleHero?.appearance?.height[1]}
            </span>
          </p>

          <p className={`font-bold text-stone-700`}>
            Weight:{' '}
            <span
              className={`font-normal ${
                singleHero?.appearance?.weight[1] == '0 kg'
                  ? 'text-red-500'
                  : ''
              }`}
            >
              {singleHero?.appearance?.weight[1] == '0 kg'
                ? 'Unknown?'
                : singleHero?.appearance?.weight[1]}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Place Of Birth:{' '}
            <span
              className={`font-normal ${
                singleHero?.biography?.['place-of-birth'] == '-'
                  ? 'text-red-500'
                  : ''
              }`}
            >
              {singleHero?.biography?.['place-of-birth'] == '-'
                ? 'Unknown?'
                : singleHero?.biography?.['place-of-birth']}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Work:{' '}
            <span
              className={`font-normal ${
                singleHero?.work?.occupation == '-' ? 'text-red-500' : ''
              }`}
            >
              {singleHero?.work?.occupation == '-'
                ? 'Unknown?'
                : singleHero?.work?.occupation}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Group Affiliation:{' '}
            <span
              className={`font-normal ${
                singleHero?.connections?.['group-affiliation'] == '-'
                  ? 'text-red-500'
                  : ''
              }`}
            >
              {singleHero?.connections?.['group-affiliation'] == '-'
                ? 'Unknown?'
                : singleHero?.connections?.['group-affiliation']}
            </span>
          </p>

          <p className='font-bold text-stone-700'>
            Relatives:{' '}
            <span
              className={`font-normal ${
                singleHero?.connections?.relatives == '-' ? 'text-red-500' : ''
              }`}
            >
              {singleHero?.connections?.relatives == '-'
                ? 'Unknown?'
                : singleHero?.connections?.relatives}
            </span>
          </p>

          {/* powerstat */}
          <p className='font-bold flex items-center gap-1 font-playwrite text-2xl underline'>
            Powerstats <FaArrowRight />
          </p>
          <p className='text-stone-700'>Intelligence</p>
          <progress
            className='progress lg:w-96 md:w-80 w-60'
            value={singleHero?.powerstats?.intelligence}
            max='100'
          ></progress>

          <p className='text-stone-700'>Strength</p>
          <progress
            className='progress lg:w-96 md:w-80 w-60'
            value={singleHero?.powerstats?.strength}
            max='100'
          ></progress>

          <p className='text-stone-700'>Speed</p>
          <progress
            className='progress lg:w-96 md:w-80 w-60'
            value={singleHero?.powerstats?.speed}
            max='100'
          ></progress>

          <p className='text-stone-700'>Durability</p>
          <progress
            className='progress lg:w-96 md:w-80 w-60'
            value={singleHero?.powerstats?.durability}
            max='100'
          ></progress>

          <p className='text-stone-700'>Power</p>
          <progress
            className='progress lg:w-96 md:w-80 w-60'
            value={singleHero?.powerstats?.power}
            max='100'
          ></progress>

          <p className='text-stone-700'>Combat</p>
          <progress
            className='progress lg:w-96 md:w-80 w-60'
            value={singleHero?.powerstats?.combat}
            max='100'
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
