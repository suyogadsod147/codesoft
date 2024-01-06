import React , { useState }  from 'react'


const Proficiency = () => {

    const [frontend, setFrontend] = useState(85);
    const [backend, setBackend] = useState(60);
    const [programming, setProgramming] = useState(50);
  return (
    <div className='p-4'>
        <div className='max-w-screen-xl mx-auto flex'>

            <div className='w-1/2'>

                <h2 className='text-5xl pb-12 font-semibold' >Proficiency</h2>
               
                <div className='pb-4'>
                    <h3 className='pb-4 text-2xl'>Frontend/Design</h3>
                    <input className='w-2/3 ' type="range" name="" id="" value={frontend} />
                </div>

                <div className='pb-4'>
                    <h3 className='pb-4 text-2xl' >Backend</h3>
                    <input className='w-2/3' type="range" name="" id="" value={backend}/>
                </div>

                <div className='pb-4'>
                    <h3 className='pb-4 text-2xl'>Programming</h3>
                    <input className='w-2/3' type="range" name="" id="" value={programming} />
                </div>

            </div>
            <div className='w-1/2'>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Proficiency
