import React from 'react';
import LazyLoading from './Ellipsis-1s-200px.gif';


function LazyLoadingSpinner() {
  return (
      <div className='text-center'>
        <img src={LazyLoading} alt="loading" />
      </div>
  )
}

export default LazyLoadingSpinner
