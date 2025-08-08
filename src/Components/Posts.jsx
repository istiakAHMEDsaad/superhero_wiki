import PropTypes from 'prop-types';

const Posts = ({ posts, loading }) => {
  if (loading) {
    <div className='flex items-center justify-center'>
      <span className='loading loading-spinner loading-xl text-error'></span>;
    </div>;
  }

  return (
    // card container
    <div className=''>
      {posts.map((post, idx) => (
        <div key={idx} className='border'>
          <p>{post?.name}</p>
          <img src={post?.image?.url} alt='' />
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export default Posts;
