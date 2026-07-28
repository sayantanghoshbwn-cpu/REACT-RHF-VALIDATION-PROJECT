import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex items-center justify-between bg-black rounded-xl'>
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
      <button onClick={() => setToggle((prev) => !prev)} className='p-2 bg-green-600 text-white rounded-xl cursor=pointer'>Create User</button>
    </div>
  )
}

export default Navbar;
