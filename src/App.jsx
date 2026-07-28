import React from 'react'
import Navbar from './compoinents/Navbar'
import Usercard from './compoinents/Usercard'
import Form from './compoinents/Form'
import { useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(false);
    const[users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState({});
    const [editIndex, setEditIndex] = useState(null);
  return (
    <div className='min-h-screen p-4 flex flex-col gap-4  from-slate-950 via-slate-900 to-indigo-950 text-white'>
      <Navbar setToggle ={setToggle} />


      {toggle ?(
        <div className='flex gap-4'>
          {
            users.map((elem, index) =>{
              return <Usercard key = {index} users = {elem} index = {index} setUsers = {setUsers} setToggle = {setToggle} setEditUser = {setEditUser} setEditIndex = {setEditIndex} />;
            })
          }
        </div>    
    ): (
     <div className='flex justify-center items-center h-[70%]'>
        <Form setUsers = {setUsers} setToggle = {setToggle} editUser = {editUser} setEditUser = {setEditUser} editIndex={editIndex} setEditIndex= {setEditIndex} />
      </div>   
    )}      
    </div>
  );
};

export default App;
