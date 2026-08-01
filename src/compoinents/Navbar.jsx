import React from 'react'

const Navbar = ({setToggle, active, setActive}) => {
  return (
    <div className='h-20 px-8 flex items-center justify-between bg-slate-900/80 rounded-3xl backdrop-blur-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/10'>
      <div>
        <img className='h-12 w-12 rounded-full object-cover border-2 border-cyan-400'
        width = {35} 
        src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt='' />
      </div>
      <div className='flex gap-6 font-semibold '>
        <p
         onClick={() => setActive("home")}
         className={ active === "home" ? "text-cyan-400 border-b-2 border-cyan-400 cursor-pointer" : "cursor-pointer"}
        > 
         Home
        </p>

        <p
         onClick={() => setActive("about")}
         className= { active === "about" ? "text-cyan-400 border-b-2 border-cyan-400 cursor-pointer" : "cursor-pointer"}
        >
         About
        </p>

        <p
         onClick={() => setActive("contact")}
         className= { active === "contact" ? "text-cyan-400 border-b-2 border-cyan-400 cursor-pointer" : "cursor-pointer"}
        >
         Contact Us
        </p>
      </div>
      <button onClick={() => setToggle((prev) => !prev)} className='px-6 py-3 rounded-xl
      bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold shadow-lg
      shadow-cyan-500/40 hover:to-blue-500 hover:shadow-cyan-400/70 hover:scale-105 transition-all
      duration-300 cursor=pointer'>Create User</button>
    </div>
  )
}

export default Navbar;
