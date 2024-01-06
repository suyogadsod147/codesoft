import React from 'react'
import { Link , NavLink , } from 'react-router-dom'


const Header = () => {
  return (

    
<div className='bg-green-500 p-4'>
  <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
    <div className='text-white text-xl font-bold'>my Logo</div>
    <div>
      <ul className='flex space-x-4'>
      <li className='text-white hover:text-gray-300 cursor-pointer'>about me</li>
        <li className='text-white hover:text-gray-300 cursor-pointer'>Project</li>
        <li className='text-white hover:text-gray-300 cursor-pointer'>Courses</li>
        <li className='text-white hover:text-gray-300 cursor-pointer'>Education</li>
        <li className='text-white hover:text-gray-300 cursor-pointer'>talks</li>
        <li className='text-white hover:text-gray-300 cursor-pointer'>contacts</li>
      </ul>
    </div>
  </div>
</div>


  )
}

export default Header
