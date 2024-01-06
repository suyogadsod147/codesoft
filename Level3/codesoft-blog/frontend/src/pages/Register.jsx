import React, { useState } from 'react'
import { Link ,  useNavigate } from 'react-router-dom'
import axios from 'axios';
import {URL} from '../url'

const Register = () => {

  const [username , setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState("");
  const navigate = useNavigate()


const handleRagister = async() =>{

  try {
    const res = await axios.post(URL+"/api/auth/register" , {username , password , email})
    setUsername(res.data.username);
    setPassword(res.data.password);
    setEmail(res.data.email);
    setError(false)
    navigate("/login")
  } catch (error) {
    setError(true);
    console.log(error)
  }
}

  return (



    <>
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
        <h1 className='text-lg md:text-xl font-extrabold '><Link to="/">Blog Market</Link></h1>
    </div>

    <div className='w-full flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
            <h1 className='text-xl font-bold text-left'>Create Account</h1>
            <input onChange={(e) => setUsername(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='username' />
            <input onChange={(e) => setEmail(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Entr mail' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Password' />
            <button onClick={handleRagister} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-500 hover:text-black'>Register</button>
            {error && <h3 className='text-red-500 text-xl'>Something went wrong</h3> }
            <div className='flex justify-center items-center space-x-4'>
                <p>already registered</p>
                <p className='text-gray-500 hover:text-black'><Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register