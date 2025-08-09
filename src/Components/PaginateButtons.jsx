const PaginateButtons = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className='flex gap-2 mt-5 flex-wrap justify-center'>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`btn btn-sm ${
            currentPage === page ? 'btn-neutral' : 'btn-outline'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginateButtons;
