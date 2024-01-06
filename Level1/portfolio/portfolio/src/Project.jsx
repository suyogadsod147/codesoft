import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='p-4 '>
      <div className='max-w-screen-xl mx-auto '>
        <div className='text-5xl pb-12 font-semibold '>Projects</div>
          <div className='max-w-screen-xl mx-auto flex  flex-wrap'>
            <ProjectCard src="https://zingy-puffpuff-1c879f.netlify.app" srcname="click to view project"
            tools="genrate your complex password here" name="Get Password"/>
            <ProjectCard src="https://github.com/suyogadsod147/contactmanager" srcname="Source Code"
            tools="This is nodejs project " name="Contact Manager"/>
            <ProjectCard src="https://magenta-moonbeam-91f2ac.netlify.app/" srcname="click to view project" 
            tools="it is built by using React. it dynamically convert your amount other currency " 
            name="Currency-Converter"/>
            <ProjectCard src="https://dancing-praline-ce9861.netlify.app" srcname="click to view project"
            tools="keep your nots here" name="Keep Notes"/>
           
          </div>
      </div>
    </div>
  )
}

export default Project
