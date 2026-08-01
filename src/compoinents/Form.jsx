import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({setUsers, setToggle, editUser, editIndex, setEditUser, setEditIndex}) => {

  let {register, handleSubmit, reset, formState:{errors}} = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    reset(editUser);
  }, [editUser, reset]);
  
  return (
    <div className='flex flex-col gap-3 items-center'>
      <h1 className='text-xl font-bold'>Create User</h1>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
        if(editIndex !== null) {
          setUsers((prev) => 
          prev.map((user, index) =>
          index === editIndex ? data:user
        )
      );
        }else {
          setUsers((prev) => [...prev,data]);
        }
        reset();
        setEditUser({});
        setEditIndex(null);
        setToggle((prev) => !prev );
      })} className='w-80 flex flex-col gap-3 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl'>
        <input
          {...register("name", {
            required: "Name is Required !",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces are not allowed !"
            }
          })}
         className='p-3 rounded-xl outline-none border border-white/30 bg-white/10 text-white placeholder:text-gray-300 focus:border-cyan-400/30 transition' type='text' placeholder='Name' />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is Required !",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: " Please enter the valid email !"
            }
          })}
         className='p-3 rounded-xl outline-none border border-white/30 bg-white/10 text-white placeholder:text-gray-300 focus:border-cyan-400/30 transition' type='email' placeholder='Email' />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <input
          {...register("Mobile", {
            required:"Mobile number is required !",
            minLength: {
              value:10,
              message: "Minimum 10 digits are required !",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits !",
            },
          })}
         className='p-3 rounded-xl outline-none border border-white/30 bg-white/10 text-white placeholder:text-gray-300 focus:border-cyan-400/30 transition ' type='number' placeholder='Mobile Number' />
         {errors.Mobile && <p className='text-red-500'>{errors.Mobile.message}</p>}
        <input
          {...register("image", {
            required:"Image is Required !",
          })}
         className='p-3 rounded-xl outline-none border border-white/30 bg-white/10 text-white placeholder:text-gray-300 focus:border-cyan-400/30 transition' type='url' placeholder='Image' />
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>}

        <button className='mt-2 p-3 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white font-semibold shadow-lg shadow-yellow-500/40 transition-all'>Add User</button>
      </form>
    </div>
  )
}

export default Form
