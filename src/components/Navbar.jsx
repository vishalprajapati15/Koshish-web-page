import React from 'react'
import logo from "../assets/pic/logo.png";
function Navbar() {
  
  return (
    <div className='fixed top-0 left-0 bg-[#8D99AE] w-full flex text-2xl justify-between h-[10vh] px-3 items-center'>
        <div className='w-[20%] flex justify-center items-center'>
            <img src={logo} alt="Logo Image" className='w-20' />
        </div>
        <div className='w-[65%] justify-evenly items-center hidden md:flex text-[#ccc]'>
            <a href="#" className='hover:text-[#fff] hover:text-[1.6rem] transition-all duration-300'>Home</a>
            <a href="#" className='hover:text-[#fff] hover:text-[1.6rem] transition-all duration-300'>About</a>
            <a href="#" className='hover:text-[#fff] hover:text-[1.6rem] transition-all duration-300'>Events</a>
            <a href="#" className='hover:text-[#fff] hover:text-[1.6rem] transition-all duration-300'>Contact</a>
            <button className='bg-[#2b1fb0] rounded px-2 py-1 border border-transparent hover:bg-transparent hover:text-[#2b1fb0] hover:border-blue-800 transition-all duration-300'>Donate</button>
        </div>
        <div className='md:hidden block hover:text-[#fff] cursor-pointer transition-all duration-300'>&#9776;</div>
    </div>
  )
}

export default Navbar