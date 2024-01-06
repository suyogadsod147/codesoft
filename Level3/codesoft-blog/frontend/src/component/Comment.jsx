import React, { useContext } from 'react'
import {MdDelete} from 'react-icons/Md'
import { URL } from '../url'
import { UserContext } from '../context/userContext'
import axios from 'axios'

const Comment = ({c , post}) => {
  const user = useContext(UserContext)

  const deleteComment = async(id)=>{
    try {
      await axios.delete(URL+"/api/comments/"+id , {withCredentials : true} )
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  console.log(user)
  console.log(post)
  return (
    
    <div className=' px-2 py-2 bg-gray-200 rounded-lg my-2'>
          <div className='flex items-center justify-between'>
              <h3 className='font-bold text-gray-600'>@{c.author}</h3>
                  <div className='flex items-center justify-center space-x-4'>
                      <p>{(new Date(Date.parse(c.createdAt))).toLocaleString()}</p>
                        {user?.user._id === post?.userId?
                          <div className='flex items-center justify-center space-x-2'>
                            <p className=' cursor-pointer' onClick={()=> deleteComment(c._id)}><MdDelete/></p>
                          </div>:""
                        }
                  </div>    
          </div>
              <p className='px-4 mt-2'> {c.comment}</p>
    </div>
  )
}

export default Comment
