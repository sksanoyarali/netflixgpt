import React from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { LOGO_URL } from '../utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    })
    //unsubscribe when component unmounts
    return () => unsubscribe()
  }, [])
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        navigate('/error')
      })
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex ">
          <h2 className="m-4 text-2xl text-white font-bold ">
            User:{user.displayName}
          </h2>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white p-2 my-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
