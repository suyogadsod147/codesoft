import React, { useState } from 'react'
import { NavLink , Link} from 'react-router-dom';
import { FaBarsStaggered , FaXmark } from "react-icons/fa6";
import '../App.css';

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

const navItem = [
    {path: "/", title: "Start Search" },
    {path: "/my-jobs" , title: "My Jobs" },
    {path: "/salary", title: "Salary Estimate"},
    {path: "/post-jobs", title: "Post jobs"}

]
  return (
    <header className='mx-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            <a className='text-blue font-bold' href="/">JOBS-PORTAL</a>
            <ul className='hidden md:flex gap-12'>
                {
                    navItem.map(({path, title}) =>{
                        return <li key={path} className='text-base text-primary'>
                            <NavLink
                            to={path} 
                            className={({isActive, isPending})=>{
                                isActive ? "active" : ""
                            }}
                            >
                                {title}
                            </NavLink>
                        </li>
                    })
                }
            </ul>

            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
                <Link to="/sign-up" className="py-2 px-5 border rounded text-white bg-blue">Sign up</Link>
            </div>

            <div className='m:hidden block'>
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                    }
                </button>
            </div>

        </nav>
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
                {   navItem.map(({path , title})=>{
                    return <li key={path} className='text-base text-white first:text-white py-1' >
                        <NavLink to={path} 
                        className={({isActive})=> 
                        isActive ? "active" : ""} >
                            {title}
                        </NavLink>
                        </li>
                    })}

                <li className='text-white py-1' ><Link to="/login"className="py-2 px-5 border rounded" >Login</Link></li>   
            </ul>
        </div>
        
    </header>
  )
}

export default Navbar
