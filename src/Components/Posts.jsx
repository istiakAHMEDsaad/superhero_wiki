import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className='flex items-center justify-center'>
        <span className='loading loading-spinner loading-xl text-error'></span>
      </div>
    );
  }

  return (
    // card container
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2'>
      {posts.map((post, idx) => (
        <Link to={`/hero-details/${post?.id}`}
          key={idx}
          className='flex flex-col border border-gray-300 p-1 rounded-xl shadow hover:scale-[0.99] transition-transform'
        >
          {/* image */}
          <div className=''>
            <img
              className='rounded-xl '
              src={post?.image?.url}
              alt={post?.name}
            />
          </div>

          {/* text */}
          <div className='text-xl pl-1'>
            <p className='font-bold'>
              Name: <span className='font-normal'>{post?.name}</span>
            </p>
            <p className='font-bold'>
              Publisher:{' '}
              <span className='font-normal'>{post?.biography?.publisher}</span>
            </p>

            <p className='font-playwrite'>Power Level </p>
            <p>Intelligence</p>
            <progress
              className='progress w-56'
              value={post?.powerstats?.intelligence}
              max='100'
            ></progress>

            <p>Strength</p>
            <progress
              className='progress w-56'
              value={post?.powerstats?.strength}
              max='100'
            ></progress>
            
            <p>Power</p>
            <progress
              className='progress w-56'
              value={post?.powerstats?.power}
              max='100'
            ></progress>
          </div>
        </Link>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export default Posts;
