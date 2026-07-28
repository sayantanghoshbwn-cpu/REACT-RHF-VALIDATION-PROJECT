import React from 'react'
import Navbar from './compoinents/Navbar'
import Usercard from './compoinents/Usercard'
import Form from './compoinents/Form'
import { useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(false);
    const[users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState({});
  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
      <Navbar setToggle ={setToggle} />


      {toggle ?(
        <div className='flex gap-4'>
          {
            users.map((elem, index) =>{
              return <Usercard key = {index} users = {elem} index = {index} setUsers = {setUsers} setToggle = {setToggle} setEditUser = {setEditUser} />;
            })
          }
        </div>    
    ): (
     <div className='flex justify-center items-center h-[70%]'>
        <Form setUsers = {setUsers} setToggle = {setToggle} editUser = {editUser} setEditUser = {setEditUser} />
      </div>   
    )}      
    </div>
  );
};

export default App;
