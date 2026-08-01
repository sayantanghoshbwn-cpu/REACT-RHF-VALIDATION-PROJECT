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
    const [active, setActive] = useState("home");
    const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='min-h-screen p-4 flex flex-col gap-4 text-white bg-gradient-to-br from-black  via-slate-950 to-black'>
      <Navbar setToggle ={setToggle} active={active} setActive={setActive}/>


      {toggle ?(
        <div className='flex gap-4 mt-6'>
          {
            users.map((elem, index) =>{
              return <Usercard key = {index} users = {elem} index = {index} setUsers = {setUsers} setToggle = {setToggle} setEditUser = {setEditUser} setEditIndex = {setEditIndex} showPopup={showPopup} setShowPopup={setShowPopup} />;
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
