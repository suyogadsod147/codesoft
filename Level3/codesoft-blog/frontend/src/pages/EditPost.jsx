import React, { useState ,useContext, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import {UserContext} from "../context/userContext";
import { URL } from '../url';
import axios from 'axios';
import { useParams , useNavigate} from 'react-router-dom';

const EditPost = () => {
  const postId = useParams().id
  const [category, setCategory] = useState('');
  const [categorys, setCategorys] = useState([]);
  const [title , setTitle] = useState('');
  const [description, setDescription] = useState("")
  const [file , setFile] = useState(null)
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  

  const fetchPost = async() =>{
    try {
      const res = await axios.get(URL+"/api/posts/"+postId , {withCredentials: true});
      setDescription(res.data.description)
      console.log(res.data)
      setFile(res.data.photo)
      setCategorys(res.data.categories)
      setTitle(res.data.title)
    } catch (error) {
      console.log(error)
    }
  }

  const addCategory = () => {
    if (category.trim() !== '') {
      let updatedCategorys = [...categorys];
      updatedCategorys.push(category);
      setCategory('');
      setCategorys(updatedCategorys);
    }
  };

  const deleteCategory = (i) => {
    let updatedCategoys = [...categorys];
    updatedCategoys.splice(i, 1);
    setCategorys(updatedCategoys);
  };


  const handleUpdate = async(e)=>{
    e.preventDefault();
    const post = {
      title , 
      description , 
      username : user.username,
      userId : user._id,
      categories : categorys
    }

    if(file){
      const data = new FormData();
      const filename = Date.now()+file.name
      data.append("img" , filename)
      data.append("file",file)
      post.photo = filename

      // upload image
      try{
        const imgUpload = await axios.post(URL + "/api/upload" , data)
        
        // console.log(imgUpload.data)
      }catch(error){
          console.log(error)
      }
    }
    // post upload
    try {
      const res = await axios.put(URL + "/api/posts/"+postId ,post , {withCredentials:true})
      navigate("/posts/post/"+res.data._id)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(()=>{
    fetchPost()
  },[postId])


  return (
    <div>
      <div className='px-6 md:px[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl'>Update Post</h1>
        <form action='' className='w-full flex flex-col space-y-4 mb:space-y-8 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='Enter Post Title' className='px-4 py-2 outline-none' />
          <input onChange={(e)=>setFile(e.target.files[0])} type='file' className='px-4' />
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
              <input
                value={category}
                // defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
                type='text'
                className='px-4 outline-none '
                placeholder='Enter post category'
              />
              <div className='bg-black text-white px-4 font-semibold cursor-pointer py-1' onClick={addCategory}>
                Add
              </div>
            </div>
            {/* Categories */}
            <div className='flex px-4 mt-3'>
              {categorys.map((c, i) => (
                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 py-1 px-2 rounded-md'>
                  <p>{c}</p>
                  <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'>
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
            <textarea onChange={(e) =>setDescription(e.target.value)} value={description} name='' id='' cols='30' rows='15' className='px-4 py-2 outline-none' placeholder='Enter the description'></textarea>
            <button onClick={handleUpdate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
