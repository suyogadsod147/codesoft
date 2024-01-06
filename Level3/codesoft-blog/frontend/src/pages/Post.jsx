import React , {useEffect , useState , useContext} from 'react'
import {BiEdit} from 'react-icons/Bi'
import {MdDelete} from 'react-icons/Md'
import axios from 'axios'
import {useParams , useNavigate} from 'react-router-dom'
import {URL , IMAGE_FOLDER} from '../url'
import { UserContext } from '../context/userContext'
import Loader from '../component/Loader'
import Comment from '../component/Comment'


const Post = () => {
    const navigate = useNavigate();
    const postId = useParams().id
    const [post , setPost] = useState({})
    const user = useContext(UserContext)
    const [loader , setLoader] = useState(true)
    const [comment , setComment] = useState("")
    const [comments , setComments] = useState([])
    

    const fetchPost = async() =>{
        setLoader(true)
        try {
            const res = await axios.get(URL + '/api/posts/' + postId , { withCredentials: true })
            // console.log(res.data)
            setPost(res.data)
            setLoader(false)
        } catch (error) {
           console.error(error) 
           setLoader(true)
        }
    }

// console.log(user)
    const commentHandler = async(e) =>{
        e.preventDefault()
        try {
            const res = await axios.post(URL+"/api/comments/create", {
                comment:comment,
                author:user.user.username,
                postId:postId,
                userId:user.user._id
            },
            {withCredentials:true} )
                setComment("");
                fetchComments()
            
        } catch (error) {
            console.log(error.response.data)
        }
    }



    const handleDeletePost =  async() => {
        try {
            const res = await axios.delete(URL+ "/api/posts/"+postId , {withCredentials: true})
            // console.log(res.data)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const fetchComments = async()=>{
        try {
            const res = await axios.get(URL+"/api/comments/post/" + postId)
            setComments(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() =>{
        fetchPost()
    } , [postId])

    useEffect(() =>{
        fetchComments()
    } , [postId])
    

  return (
    <div>
      {
        loader?<Loader/>:<><div className='px-8 md:px-[200px] mt-8'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold text-black md:text-3xl'> {post.title}  </h1>
            {user.user?._id===post?.userId && <div className='flex items-center justify-center space-x-2'>
                <p className=' cursor-pointer' onClick={()=>navigate("/edit/"+ postId)}><BiEdit/> </p>
                <p className=' cursor-pointer' onClick={handleDeletePost} ><MdDelete/></p>
            </div>}
            
        </div>
        <div className='flex items-center justify-between mt-2 md:mt-4'>
            <p>@{post.username}</p>
            <div>
            {
                (new Date(Date.parse(post.createdAt))).toLocaleString()
            }
            </div>
        </div>
         <img src={IMAGE_FOLDER+ post.photo} className='w-full xl:w-[60%] mx-auto mt-8 ' alt="" />
         <p className='mx-auto mt-8'>{post.description}</p>
         <div className='flex items-center mt-8 space-x-4 font-semibold'>
            <p>Categories:</p>
            <div className='flex justify-center items-center space-x-2 '>
                {post.categories?.map((c , i)=>(
                    <div className='bg-gray-300 rounded-lg px-3 py-1 ' key={i}>{c}</div>
                ))}
               
                
            </div>
         </div>

         <div className='w-full flex flex-col mt-4 md:flex-row'>
           {/* write a comment */}
            <input onChange={(e)=>setComment(e.target.value)} value={comment} type="text" placeholder="write comment" className='md:w-[80%] py-2 outline-none px-4 mt-4 md:0 ' />
            <button onClick={commentHandler} className='bg-black text-white px-4 py-1 md:w-[20%] mt-4 md:mt-0' >Add Button</button>
        </div>
         <div className='flex flex-col mt-4 '>
                <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
               {
                comments?.map((c)=>(<Comment key={c._id} c={c} post={post} />))
               }
             
                
         </div>
          
           

      </div></>
      }
    </div>
  )
}

export default Post
