import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex items-center justify-between bg-white/10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl'>
      <div>
        <img className='h-12 w-12 rounded-full object-cover'
        width = {35} 
        src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt='' />
      </div>
      <div className='flex gap-6 font-semibold '>
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <button onClick={() => setToggle((prev) => !prev)} className='px-6 py-3 rounded-xl
      bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold shadow-lg
      shadow-cyan-500/40 hover:to-blue-500 hover:shadow-cyan-400/70 hover:scale-105 transition-all
      duration-300 cursor=pointer'>Create User</button>
    </div>
  )
}

export default Navbar;
