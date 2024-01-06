import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='mt-8 w-full bg-black px-8 xl:px-[200px] sm:justify-between flex sm:flex-row flex-col space-y-4 md:space-y-0 items-start  text-sm md:text-md py-8 '>
      <div className='flex flex-col text-white'>
          <p> Featured Blogs</p>
          <p>Most viewd</p>
          <p>Readers Choice</p>
      </div>

      <div className='flex flex-col text-white'>
          <p> Forum</p>
          <p> Support</p>
          <p>Resent Post</p>
      </div>

      <div className='flex flex-col text-white'>
          <p> Privacy policy</p>
          <p> About us</p>
          <p>Terms & Conditionst</p>
          <p>Terms & service</p>
      </div>

    </div>

    <p className='py-2 pb-2 text-center text-white bg-black'>All rights reserved @ blog Market 2023</p>
    </>
  )
}

export default Footer
