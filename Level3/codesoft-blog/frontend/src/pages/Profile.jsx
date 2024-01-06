import React,{useState , useContext , useEffect} from 'react'
import ProfilePosts from '../component/ProfilePosts'
import { URL } from '../url'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Profile = () => {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  // const [password , setPassword] = useState("")
  const [posts , setPosts] = useState([])
  const {user} = useContext(UserContext)
  const param = useParams().id
  
  console.log(user)
  // const id = user._id

  const fetchProfile = async() =>{
    try {
      
      const res = await axios.get(URL+"/api/users/"+user._id , {withCredentials: true}) 
      setUsername(res.data.username)
      setEmail(res.data.email)
      // setPassword(res.data.password)

    } catch (error) {
      console.error(error)
    }
  }

  const fetchUserPost = async() =>{
    try {
      const res = await axios.get(URL+"/api/posts/user/"+user._id , {withCredentials: true})
      setPosts(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  const handleUserUpdate = async()=>{
    try {
      const res = await axios.put(URL +"api/users/"+user._id , {username , email } , {withCredentials:true} )
      console.log(res.data)
    } catch (error) {
      console.log(error)
      
    }
  } 


  useEffect(() =>{
    fetchProfile()
  } ,[param])


  useEffect(() =>{
    fetchUserPost()
  },[param])


  return (
    <div className='px-8 md:px-[200px] mt-8 flex gap-28 md:flex-row  flex-col-reverse'>
        <div className='flex flex-col md:w-[70%] w-full'>
        <h1 className='text-xl font-semibold mt'>Your Posts</h1>
          
          {
            posts?.map((p)=>{
              <ProfilePosts key={p._id} p={p} />
            })

          }
        
          
        </div>
        <div className='md:sticky md:top-16 flex  flex-col space-y-4 md:w-[25%] w-full '>
            <h1 className='text-xl px-4 font-semibold mt' >Prpfile</h1>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} className='outline-none px-4 py-2 text-gray-500' placeholder='username' type="text" />
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='outline-none px-4 py-2 text-gray-500' placeholder='email' type="email" />
            {/* <input onChange={(e)=>setPassword(e.target.value)} value={password} className='outline-none px-4 py-2 text-gray-500' placeholder='password' type="password" /> */}
            <div className='flex items-center px-4 space-x-4 mt-8'>
            <button onClick={handleUserUpdate} className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Update</button>
            <button  className='text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Profile
