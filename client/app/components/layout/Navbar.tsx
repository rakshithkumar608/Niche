import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 absolute top-0 z-50">

      <h1 className="text-4xl font-bold text-black">
        Niche
      </h1>

      <div className="flex items-center gap-4">
        <Link 
        href="/login" 
        className="text-black hover:text-gray-700 bg-white px-4 py-2 rounded-2xl font-semibold transition duration-300">
          Login
        </Link>
        <Link href="/signup" className="text-black hover:text-gray-700 bg-white px-4 py-2 rounded-2xl font-semibold transition duration-300">
          Start Free
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
