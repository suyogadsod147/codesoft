import React, { useState ,useContext } from 'react'
import { Link , useLocation} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import Menu from './Menu'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'



const NavBar = () => {
  const [promt , setPromt] = useState("");
  const [menu , setMenu] = useState(false)
  const navigate = useNavigate()
  const {path} = useLocation().pathname
  // console.log(param)

  const showMenu  = ()=>{  
        setMenu(!menu);   
  }


  const {user}=useContext(UserContext)

  return (
    <div className='flex items-center justify-between md:px-[200px] px-6  py-4 rounded-md p-4'>
      <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">Blog Market</Link></h1>
      {path === "/" && <div className='flex justify-center items-center space-x-0'>
          <p onClick={()=>navigate(promt?"?search="+promt:navigate("/"))} className=' cursor-pointer'><BsSearch/></p>
          <input onChange={(e)=>setPromt(e.target.value)} className=' outline-none px-3' placeholder='search a post' type="text" />
      </div>}
      <div className='hidden  md:flex items-center justify-center md:right-32 gap-10 space-x-2 md:space-x-4'>
       {user?<h3><Link to="/write" >write</Link></h3> : <h3><Link to="/login" >Login</Link></h3>}
        {user? <div onClick={showMenu} >
        <p className='cursor-pointer relative'><FaBars/> </p>
        {
          menu && <Menu/>
        }
      </div> : <h3><Link to="/register">Register</Link></h3>}
      </div>
      <div onClick={showMenu} className='md:hidden  text-lg'>
        <p className='cursor-pointer relative'><FaBars/> </p>
        {
          menu && <Menu/>
        }
      </div>
    </div>
  )
}

export default NavBar
