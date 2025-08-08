import PropTypes from 'prop-types';

const LimitedCard = ({ hero }) => {
  console.log(hero);
  const { biography, powerstats, image, name } = hero || {};

  return (
    <div className='lg:w-96 md:w-80 w-72 flex flex-col border border-gray-300 p-1 rounded-xl shadow hover:scale-[0.99] transition-transform'>
      {/* image */}
      <div className=''>
        <img className='rounded-xl ' src={image?.url} alt={name} />
      </div>
      {/* text */}
      <div className='text-xl pl-1'>
        <p className='font-bold'>
          Name: <span className='font-normal'>{name}</span>
        </p>
        <p className='font-bold'>
          Publisher: <span className='font-normal'>{biography?.publisher}</span>
        </p>

        <p className='font-playwrite'>Power Level </p>
        <p>Intelligence</p>
        <progress
          className='progress w-56'
          value={powerstats?.intelligence}
          max='100'
        ></progress>
        <p>Strength</p>
        <progress
          className='progress w-56'
          value={powerstats?.strength}
          max='100'
        ></progress>
      </div>
    </div>
  );
};

LimitedCard.propTypes = {
  hero: PropTypes.array,
};

export default LimitedCard;
