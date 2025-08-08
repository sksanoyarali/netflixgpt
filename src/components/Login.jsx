import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'
const Login = () => {
  const [isSignInForm,setIsSignINForm]=useState(true);

const toggleSignInForm=()=>{
  setIsSignINForm(!isSignInForm);
}

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
            //   className='h-screen object-cover'
              src={BG_URL} 
              alt="Image" 
              />
        </div>
        <form className='p-12 w-3/12 absolute bg-black/50 my-20 mx-auto right-0 left-0 text-white rounded-lg '>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && 
             <input 
             type="text"
             placeholder='Full Name'
             className='p-2 my-4 w-full bg-gray-700 rounded-lg border-none outline-none'
             />}
            <input 
             type="text"
             placeholder='Email Address'
             className='p-2 my-4 w-full bg-gray-700  rounded-lg border-none outline-none'
             />
            <input 
             type="text"
             placeholder='Password'
             className='p-2 my-4 w-full bg-gray-700 rounded-lg border-none outline-none'
             />

            <button className='p-2 my-4 w-full bg-red-500 rounded-lg'>
              {isSignInForm?"Sign In":"Sign Up"}
              </button>
            <p className='py-4 cursor-pointer '
             onClick={toggleSignInForm}
            >
              {isSignInForm?"New To Netflix?Sign Up":"Already Have Account? Sign In"}
              </p>

        </form>
    </div>
  )
}

export default Login