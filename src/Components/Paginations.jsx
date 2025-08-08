import PropTypes from 'prop-types';

const Paginations = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers?.push(i);
  }

  return (
    <div className='mt-8'>
      {pageNumbers?.map((number, idx) => (
        <div key={idx} className='join'>
          <button onClick={()=>paginate(number)} className={`join-item btn ${number == currentPage ? 'btn-neutral' : ''}`}>{number}</button>
        </div>
      ))}
    </div>
  );
};

Paginations.propTypes = {
  postPerPage: PropTypes.number,
};

export default Paginations;
