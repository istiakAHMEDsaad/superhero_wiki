const Browse = () => {
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

      <div>
        {/* superhero card */}
      </div>
    </div>
  );
};

export default Browse;
