import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-400 flex justify-center items-center gap-10 '>
        <Link className='text-white py-2 font-bold hover:text-black transition ease-in-out duration-300 hover:scale-105' to="/">Home</Link>
        <Link className='text-white py-2 font-bold hover:text-black transition ease-in-out duration-300 hover:scale-105' to="/show-books">Show-Books</Link>
        <Link className='text-white py-2 font-bold hover:text-black transition ease-in-out duration-300 hover:scale-105' to="/add-book">Add-Book</Link>
      </nav>
    </div>
  )
}

export default Navbar