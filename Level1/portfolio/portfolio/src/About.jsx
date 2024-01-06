import React from 'react'
import Button from './Button'
import {FaGithub, FaLinkedin , FaInstagram, FaFacebook , FaTwitter ,  } from 'react-icons/fa';


const About = ( ) => {
    
  return (
    <div className='p-4 '>
      <div className='max-w-screen-xl mx-auto flex pt-24'>
            <div className='w-1/2'>
                <h2 className='text-5xl pb-16 font-semibold'>Hello everyone i'm Suyog 👋</h2>
                <p className=' text-2xl text-gray-500 pb-16'> I am passionate Full Stack Software Devloper 🚀 having an experience of 
                building web application with Javascript/Reactjs/Nodejs and some other cool
                libraries and frameworks  </p>

                  <div className='flex justify-evenly text-3xl px-8'> 
                      
                        <a href="https://github.com/suyogadsod147/" target='blank' ><FaGithub className='text-black-500'/></a>
                        <a href="https://www.linkedin.com/in/suyog-adsod-a3b584276/"><FaLinkedin className='text-blue-500'/></a>
                        <a href="https://www.facebook.com/suyog.adsod"><FaFacebook className=' text-blue-700' /></a>
                        <FaInstagram className=' text-pink-500' />
                        <FaTwitter className=' text-blue-500' />

                  </div>

                  <div className='p-8  md:px-20 xl:px-40 flex'> 
                      <Button label="My Resume"/> 
                      <Button label="Contact Me"/>
                  </div>

           </div>
           <div className='w-1/2  pl-32'><img src="main.png" alt="" className='h-[80%]' /></div>

       </div>
    </div>
  )
}

export default About


