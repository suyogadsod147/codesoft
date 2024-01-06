import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import axios from 'axios';
import { URL } from '../url';
import {useNavigate , Link} from 'react-router-dom'


const Menu = () => {

  const {user} = useContext(UserContext);
  const {setUser } = useContext(UserContext)
  const navigate  = useNavigate()
  console.log(user)
  const handleLogout = async ()=>{
    try {
      const res = await axios.get(URL+ "/api/auth/logout" ,
      {withCredentials: true}); 
      // console.log(res);
      setUser(null);
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

    
  return (
    <div className='bg-black md:w-[200px] flex flex-col items-center absolute top-12 right-6  rounded-md'  >
      {!user && <Link to="/login" className='text-white text-lg hover:text-gray-500 cursor-pointer'>Login</Link>}
      {!user && <Link to="/register" className='text-white text-lg hover:text-gray-500 cursor-pointer'>Register</Link>}
      {user && <Link to={"/profile/"+user._id} className='text-white text-lg hover:text-gray-500 cursor-pointer'>Profile </Link>}
      {user && <Link to="/write" className='text-white text-lg hover:text-gray-500 cursor-pointer'>Write</Link>}
      {user && <Link to="/myblogs" className='text-white text-lg hover:text-gray-500 cursor-pointer'>My Blog</Link>}
      {user && <h3 onClick={handleLogout} className='text-white text-lg hover:text-gray-500 cursor-pointer'>Logout</h3>}
    </div>
  )
}

export default Menu
