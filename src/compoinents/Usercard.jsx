import React from 'react'

const Usercard = ({users, index, setUsers, setToggle, setEditUser, setEditIndex, showPopup, setShowPopup}) => {
  return (
    <>
    <div className='w-60 p-6 border border-cyan-400/20 rounded-3xl flex flex-col gap-2 bg-white/10 backdrop-blur-xl shadow-xl'>
      <div className='h-40 w-40 mx-auto'>
        <img className='object-cover h-full w-full rounded-xl ' 
        src= {users.image} alt='' />
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xl font-bold text-white'>{users.name}</h1>
        <p className='text-sm text-slate-400 '>{users.email}</p>
        <p className='text-sm'>{users.contact}</p>
      </div>
      <div className='flex justify-between w-full gap-4 mt-3'>
        <button onClick={() => {
          setEditUser(users);
          setEditIndex(index);
          setShowPopup(true);
          }} 
          className='bg-gradient-to-r bg-green-500/80 px-2 py-3 rounded shadow-lg text-white font-semibold'>
            Update
          </button>
        <button  onClick = {() => {
          setUsers((users) => users.filter((item, i)=> i !== index));
        }}
          className='bg-gradient-to-r bg-red-500/80 text-white py-2 px-3 rounded font-semibold'>Delete</button>
      </div>
    </div>
    {showPopup && (
      <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
       <div className='bg-slate-900 border border-cyan-400 rounded-xl p-6 w-80'>
       <h2 className='text-white text-xl font-bold'>
         Update Profile !
        </h2>
        <p className='text-gray-300 mt-3'>
         Are you sure you want to update this profile ?
        </p>

        <div className='flex justify-end gap-3 mt-5'>
         <button
           onClick = {() => {
            setEditUser({});
            setEditIndex(null);
            setShowPopup(false);
           }}            
           className='px-4 py-2 bg-gray-600 rounded-lg text-white'>
           Cancel 
          </button>

          <button
           onClick = {() => {           
            setToggle((prev) => !prev);
            setShowPopup(false);
           }}
           className='px-4 py-2 bg-green-600 rounded-lg text-white'
           >
            Yes
          </button>
        </div>
      </div>
    </div>     
    )}
  </>
  )
}

export default Usercard
