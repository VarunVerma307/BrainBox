import React from 'react'
import img from '../assets/images/loader.gif'
export const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-[100%] bg-richblack-800'>
        <img src={img}/>
    </div>
  )
}
