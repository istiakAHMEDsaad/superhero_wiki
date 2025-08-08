import axios from 'axios';
import { useState, useEffect } from 'react';
import Posts from '../Components/Posts';
import Paginations from '../Components/Paginations';

const Browse = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records'
      );
      setPosts(res?.data?.items);
      setLoading(false);
    };

    fetchPost();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='mt-8 font-roboto'>
      {/* Title */}
      <div className='divider text-3xl text-gray-700'>Superhero Khojo</div>

      {/* All action */}
      <div className='flex items-center justify-center gap-5'>
        {/* sorted by */}
        <select defaultValue='Pick a color' className='select'>
          <option disabled={true}>Sorted by</option>
          <option>Power</option>
          <option>Strength</option>
          <option>Intelligence</option>
        </select>

        {/* search */}
        <div className='join'>
          <div>
            <div>
              <input className='input join-item' placeholder='Search Hero' />
            </div>
          </div>

          <div className='indicator'>
            <button className='btn join-item'>Search</button>
          </div>
        </div>

        <button className='btn btn-neutral'>Reset</button>
      </div>

      {/* container */}
      <div className='my-10'>
        <Posts posts={currentPosts} loading={loading} />
        <Paginations
          postPerPage={postPerPage}
          totalPosts={posts?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Browse;
