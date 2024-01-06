import NavBar from './component/NavBar'
import Footer from './component/Footer'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { UserContextProvider } from './context/userContext'
import MyBlogs from './pages/MyBlogs'


function App() {

  return (
    <UserContextProvider>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/write' element={<CreatePost/>} />
        <Route exact path='/posts/post/:id' element={<Post/>} />
        <Route exact path='/edit/:id' element={<EditPost/>} />
        <Route exact path='/myblogs' element={<MyBlogs/>} />
        <Route exact path='/profile/:id' element={<Profile/>} />
      </Routes>
      <Footer/>
    </UserContextProvider>
     
    

  )
}

export default App
