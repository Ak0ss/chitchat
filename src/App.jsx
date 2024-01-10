import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Chat from './components/Chat'

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
const [user] =useAuthState(auth)
console.log(user)  

  return (
    <>
      <div className="container">
        <section>
          <Navbar/>
          {user ? <Chat/> : null}
        </section>
      </div>
    </>
  )
}

export default App
