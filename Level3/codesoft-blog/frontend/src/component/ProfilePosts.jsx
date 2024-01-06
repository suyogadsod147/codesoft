import React from 'react'
import { IMAGE_FOLDER } from '../url'

const ProfilePosts = ({p}) => {
  return (
    
      <div className='w-full flex mt-8 space-x-4'> 
      {/* left */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
          <img className="h-full w-full" src={IMAGE_FOLDER.p.photo} alt=" bench sitting on hillside"  />
      </div>
      {/* right */}
      <div className='flex flex-col w-[65%]'>
          <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
              {p.title}
          </h1>
          <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
              <p>@{p.username}</p>
              <div className='flex space-x-2'>
                 <p>{new Date(p.updatedAt).toLocaleString()}</p>
                 
              </div>
          </div>
          <p className='text-sm md:text-lg'>{p.description}</p>
      </div>
    </div>

      
   
  )
}

export default ProfilePosts
