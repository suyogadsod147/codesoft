import React, {useState} from 'react'
import {FaMapPin, FaSearch} from 'react-icons/fa'

const Banner = ({query , handleInputChange}) => {

    

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
        <h1 className='text-5xl font-bold text-primary mb-3'>Find your
        <span className='text-blue'> new job </span> today </h1>
        <p className='text-lg text-black/70 mb-8'>Thousands of jobs in coumuter,Engineering  and technology
         secter arte waiting for you. </p>

         <form action="">
            <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-s-md rounded shadow-xl ring-1 ring-gray-300  md:w-1/2 w-full'>
                    <input type="text" name="title" placeholder='what you are looking for' id="title" className='block flex-1 border-0 bg-transparent 
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ' 
                        onChange={handleInputChange}
                        value={query}
                    />
                    <FaSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
                </div>
                <div className='flex md:rounded-e-none rounded shadow-xl ring-1 ring-gray-300  md:w-1/3 w-full'>
                    <input type="text" name="title" placeholder='Location' id="title" className='block flex-1 border-0 bg-transparent 
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 ' 
                        
                    />
                    <FaMapPin className="absolute mt-2.5 ml-2 text-gray-400"/>
                </div>

                <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded' >Search</button>

            </div>
         </form>

    </div>
  )
}

export default Banner
