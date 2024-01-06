import React from 'react'
import {FaHtml5 , FaCss3Alt , FaJs , FaReact , FaJava , FaDatabase , FaNode ,} from 'react-icons/fa';

// what you do
const Talks = () => {
  return (
    <div className='p-4'>
      <div className='max-w-screen-xl mx-auto flex'>
      <div className='w-1/2 p-6'><img src="whatido.png" alt="" srcset="" /></div>
      <div className='w-1/2'>
        <h2 className='text-5xl pb-12 font-semibold'>What i do</h2>
        <p className='text-2xl text-gray-500'>full stack devloper who wants to explore every tech stack</p>
          <div className='py-6 flex justify-evenly text-5xl md:flex-wrap'>
            <FaHtml5 className=' text-orange-500'/>
            <FaCss3Alt className=' text-blue-500' />
            <FaJs className=' text-orange-400' />
            <FaReact className=' text-blue-300' />
            <FaJava className=' text-red-400' />
            <FaDatabase className=' text-green-400' />
            <FaNode className=' text-green-800' />

          </div>
        <p className='text-2xl text-gray-500'>⭐ Devloped intractive front end / User interfaces for your web and mobile applications </p>
        <p className='text-2xl text-gray-500'>⭐ Progresive Web Applications (PWA) in normal and SPA Stacks  </p>
        <p></p>
      </div>
      </div>
    </div>
  )
}

export default Talks
