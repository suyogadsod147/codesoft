import React , {useState , useContext} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../url'
import { UserContext } from '../context/userContext'

const Login = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState(false)
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)

    const handleLogin = async() =>{
        try {
          const res = await axios.post(URL+"/api/auth/login" , { email , password} , {withCredentials: true})
          setUser(res.data)
          // console.log(res)  
          navigate("/")
          
        } catch (error) {
            setError(true)
          console.log(error)
        }

    }

  return (
   <>
        <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
            <h1 className='text-lg md:text-xl font-extrabold '><Link to="/">Blog Market</Link></h1>
            <h3><Link to="/register">Register</Link></h3>
        </div>
        <div className='w-full flex justify-center items-center h-[80vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
            <h1 className='text-xl font-bold text-left'>log in to your account</h1>
            <input onChange={(e)=> setEmail(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Entr mail' />
            <input onChange={(e)=> setPassword(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Password' />
            <button  onClick={handleLogin} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-500 hover:text-black'>Login</button>
            {error && <h3 className='text-red-500 text-xl'>Something went wrong</h3> }
            <div className='flex justify-center items-center space-x-4'>
                <p>New here ?</p>
                <p className='text-gray-500 hover:text-black'><Link to="/register">Register</Link></p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Login
