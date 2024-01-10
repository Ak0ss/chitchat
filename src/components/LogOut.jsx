import React from 'react'
import "./LogOut.css"
import { auth } from '../firebase'

const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
  return (
    <div>
        <button onClick={()=> auth.signOut()}>Logout</button>
    </div>
  )
}

export default LogOut