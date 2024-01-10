import React, { useState } from 'react'
import {auth, db} from '../firebase'
import './SendMessage.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({scroll}) => {

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
     if (input === '' ){
      alert('Írj üzenetet!')
      return
     }
   const {uid, displayName} = auth.currentUser
   await addDoc(collection(db, 'messages'), {
    text: input,
    name: displayName,
    uid,
    timestamp: serverTimestamp()
   }) 
   setInput('')
   scroll.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <form onSubmit={sendMessage}
    className='form'>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text" placeholder='Aa...' 
        className='input'/>
        <button type='submit' className='btn'>Küldés</button>
    </form>
  )
}

export default SendMessage