import React from 'react'
import { IMAGE_FOLDER } from '../url'


const HomePost = (post) => {
  return (
    <div className='w-full flex mt-8 space-x-4'> 
    {/* left */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
          <img className="h-full w-full" src={post.photo}  />
      </div>
      {/* right */}
      <div className='flex flex-col w-[65%]'>
          <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
              {post.title}
          </h1>
          <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
              <p>@{post.username}</p>
              <div className='flex space-x-2'>
                  <p>{post.createdAt}</p>
              </div>
          </div>
          <p className='text-sm md:text-lg'>{post.description}</p>
      </div>
    </div>
  )
}

export default HomePost
