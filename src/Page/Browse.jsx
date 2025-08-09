import axios from 'axios';
import { useState, useEffect } from 'react';
import Posts from '../Components/Posts';
import PaginateButtons from '../Components/PaginateButtons';
import { useSearchParams } from 'react-router-dom';

const Browse = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // set page number to the browse
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get('page') || '1');

  const [currentPage, setCurrentPage] = useState(initialPage); //9
  const [postPerPage, _] = useState(12);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [originalPosts, setOriginalPosts] = useState([]);

  //also current page
  const [totalPages, setTotalPages] = useState(1); //16

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records?page=${currentPage}&perPage=${postPerPage}&filter=name ~ '${searchTerm}'&sort=${sortKey}`
        );
        setPosts(res?.data?.items || []);
        setOriginalPosts(res?.data?.items || []);
        setTotalPages(res?.data?.totalPages || 1); // Store total pages from API
      } catch (error) {
        console.error('Error fetching superheroes:', error);
      }
      setLoading(false);
    };

    fetchPost();
  }, [currentPage, searchTerm, sortKey, postPerPage]);

  // get current posts
  const currentPosts = posts || [];

  // Reset all filters/sorting
  const handleReset = () => {
    setSearchTerm('');
    setSortKey('');
    setPosts(originalPosts);
    setCurrentPage(1);
  };

  return (
    <div className='mt-8 font-roboto'>
      {/* Title */}
      <div className='divider text-3xl text-gray-700'>Superhero Khojo</div>

      {/* All action */}
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {/* sorted by */}
        <select
          onChange={(e) => setSortKey(e.target.value)}
          value={sortKey}
          className='select'
        >
          <option value=''>Sorted by name</option>
          <option value='name'>Ascending</option>
          <option value='-name'>Descending</option>
        </select>

        {/* search */}
        <div className='join'>
          <input
            className='input join-item'
            placeholder='Search Hero'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='btn join-item' onClick={() => setCurrentPage(1)}>
            Search
          </button>
        </div>

        <button className='btn btn-neutral' onClick={handleReset}>
          Reset
        </button>
      </div>

      {/* container */}
      <div className='my-10'>
        <Posts posts={currentPosts} loading={loading} />
        <div className='flex flex-col items-center justify-center'>
          <PaginateButtons
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
