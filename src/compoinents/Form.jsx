import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({setUsers, setToggle, editUser}) => {

  let {register, handleSubmit, reset, formState:{errors}} = useForm({
    mode: "onChange",
  });

  return (
    <div className='flex flex-col gap-3 items-center'>
      <h1 className='text-xl font-bold'>Create User</h1>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
        setUsers((prev) => [...prev,data]);
        reset();
        setToggle((prev) => !prev );
      })} className='w-80 flex flex-col gap-3 p-4 rounded border-2 border-white bg-black'>
        <input
        defaultValue={editUser.name}
          {...register("name", {
            required: "Name is Required !",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces are not allowed !"
            }
          })}
         className='p-2 rounded-xl outline-0 border border-white' type='text' placeholder='Name' />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        <input
        defaultValue={editUser.email}
          {...register("email", {
            required: "Email is Required !",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: " Please enter the valid email !"
            }
          })}
         className='p-2 rounded-xl outline-0 border border-white' type='email' placeholder='Email' />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <input
        defaultValue={editUser.Mobile}
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
         className='p-2 rounded-xl outline-0 border border-white' type='number' placeholder='Mobile Number' />
         {errors.Mobile && <p className='text-red-500'>{errors.Mobile.message}</p>}
        <input
        defaultValue={editUser.image}
          {...register("image", {
            required:"Image is Required !",
          })}
         className='p-2 rounded-xl outline-0 border border-white' type='url' placeholder='Image' />
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
        <button className='text-white bg-amber-600 p-2 rounded-xl cursor-pointer'>Add User</button>
      </form>
    </div>
  )
}

export default Form
