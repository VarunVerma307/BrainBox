import React from 'react';
import loader from '../../assets/images/loader.gif';

 const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-richblack-700'>
        <img src={loader} />
    </div>
  )
}
export default Loader;
