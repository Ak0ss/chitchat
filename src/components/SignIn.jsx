import React from 'react'
import "./SignIn.css"
import GoogleButton from 'react-google-button'

import { auth } from '../firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { signInWithRedirect } from 'firebase/auth'
const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}
const SignIn = () => {
  return (
    <div className='wrap'>
        <GoogleButton onClick={googleSignIn}/>
    </div>
    
  )
}

export default SignIn