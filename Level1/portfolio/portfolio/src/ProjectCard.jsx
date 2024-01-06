import React from 'react'


const ProjectCard = ({name , tools , src , srcname}) => {
  return (
    <div className='mx-[5%] w-[40%]'>
        <div className='shadow-2xl p-6 mb-8 bg-gray-200 rounded-md'>
            <div className='text-2xl flex '>
                <div> <img src="" alt="" /> </div> 
                <div>{name}</div>
            </div>
            <div className=' text-gray-500 my-2'>
                <div><img src="" alt="" /></div>
                <div>{tools}</div>
            </div>
            <div >
                <div className='text-blue-500' ><a href={src} target='blank'>{srcname}</a></div>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard
