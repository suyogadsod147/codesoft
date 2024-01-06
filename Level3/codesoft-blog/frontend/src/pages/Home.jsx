import React , {useContext, useEffect , useState} from 'react'
import HomePost from '../component/HomePost'
import axios from 'axios'
import {URL} from '../url'
import { useLocation } from 'react-router-dom'
import Loader from '../component/Loader'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'



const Home = () => {
  const [posts , setPosts] = useState([])
  const [noResult , setNoResult] = useState(false)
  const [loader , setLoader] = useState(true)
  const {search} = useLocation()
  const {user} = useContext(UserContext)

  console.log(user)

  const fetchPosts= async () => {
    setLoader(true)
    try {
      setNoResult(false)
      const res = await axios.get(URL + '/api/posts/'+search  ,{withCredentials: true}); 
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
          setNoResult(true)
      }
    } catch (error) {
      console.log(error)
    }
    setLoader(false)
  }

  useEffect(()=>{
    fetchPosts()
  } , [search])


  return (
    <div className='px-8 md:px-[200px] min-h-[80vh]'>
    {
      loader?<Loader/>:""
    }
      {
       noResult?<div className='text-center font-bold'>No Result Found</div>: posts.map((post)=>(
          <>
            <Link to={user?`/posts/post/${post._id}`:"/login"}>
            <HomePost key={post._id} post={post} title={post.title} categorys={post.categories} description = {post.description} username={post.username} createdAt={(new Date(Date.parse(post.createdAt))).toLocaleString()}/>
            </Link>
          </>
        ))
      }
      
    </div>
  )
}

export default Home
