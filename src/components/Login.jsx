import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'
import { checkValidData } from '../utils/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
  const [isSignInForm, setIsSignINForm] = useState(true)

  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const email = useRef(null)
  const name = useRef(null)
  const password = useRef(null)
  const toggleSignInForm = () => {
    setIsSignINForm(!isSignInForm)
  }
  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return
    //sign in sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              )
            })
            .catch((error) => {
              setErrorMessage(error.message)
            })
        })
        .catch((error) => {
          const errorMessage = error.message
          setErrorMessage(errorMessage)
        })
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + '-' + errorMessage)
        })
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          //   className='h-screen object-cover'
          src={BG_URL}
          alt="Image"
        />
      </div>
      <form
        className="p-12 w-3/12 absolute bg-black/50 my-20 mx-auto right-0 left-0 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-2 my-4 w-full bg-gray-700 rounded-lg border-none outline-none"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700  rounded-lg border-none outline-none"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg border-none outline-none"
        />
        <p className="text-red-600 my-2 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-2 my-4 w-full bg-red-500 rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New To Netflix?Sign Up'
            : 'Already Have Account? Sign In'}
        </p>
      </form>
    </div>
  )
}

export default Login
