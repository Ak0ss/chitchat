import React from 'react'
import "./Chat.css"
import Message from './Message'
import SendMessage from './SendMessage'
import { useState, useEffect, useRef } from 'react'
import { collection, onSnapshot,query, orderBy } from 'firebase/firestore'
import {db} from "../firebase"
const Chat = () => {

  const [messages, setMessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    })
    return () => unsubscribe()
    }, [])
  return (
    <>
    <main className="chat">

    {messages && messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
    </main>
    <SendMessage scroll={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat