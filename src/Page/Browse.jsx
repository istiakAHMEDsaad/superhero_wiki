import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Posts from '../Components/Posts';
import Paginations from '../Components/Paginations';
import { Slide, toast } from 'react-toastify';
import { GiMagnifyingGlass } from 'react-icons/gi';

const Browse = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [originalPosts, setOriginalPosts] = useState([]); // store the untouched API data

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records'
        );
        setPosts(res?.data?.items || []);
        setOriginalPosts(res?.data?.items || []);
      } catch (err) {
        console.error('Error fetching superheroes:', err);
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
      }
      setLoading(false);
    };

    fetchPost();
  }, []);

  // Filter & sort logic
  const filteredPosts = posts
    .filter((hero) =>
      hero?.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0; // no sorting
      const aVal = parseInt(a.powerstats[sortKey]) || 0;
      const bVal = parseInt(b.powerstats[sortKey]) || 0;
      return bVal - aVal; // high to low
    });

  // Pagination logic
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <div className='divider text-3xl text-gray-700'>
        Superhero
        <span className='flex items-center justify-center'>
          <Typewriter
            words={[`Khojo`, `Search`]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1000}
          />
          <GiMagnifyingGlass />
        </span>
      </div>

      {/* All action */}
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {/* sorted by */}
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          className='select'
        >
          <option value=''>Sorted by</option>
          <option value='intelligence'>Intelligence</option>
          <option value='strength'>Strength</option>
          <option value='power'>Power</option>
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
          <Paginations
            postPerPage={postPerPage}
            totalPosts={filteredPosts?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
