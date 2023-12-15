import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-5">
      <div className='w-10/12 m-auto flex items-center justify-between'>
        <div className='text-6xl'><Link to={"/"}>Coffee Machi</Link></div>

        <div className='flex items-center gap-8'>
          <span><Link to={"/"}>Home</Link></span>
          
          <div className='flex items-center border p-3'>
            <input type='text' placeholder='Search' />
            <BiSearch size={25} />
      
            <div className='relative'>
              <div className='absolute items-center flex align-middle justify-center -top-3 -right-3 bg-red-400 text-white rounded-full w-5 h-5'>
                <span className='text-xs'>3</span>
              </div>
              <button><SlBasket size={25}  /></button>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar