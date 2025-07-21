import React from 'react'
import { useState } from 'react'
import GreetingPropsFunction from './components/GreetingPropsFunction'
const App = () => {
  const[username, setusername] = useState("Maibram");
  const[message, setMessage] = useState("How are you?");
  return (
    
    <div>
      <h1>Hi I am parent</h1>
      <GreetingPropsFunction uname = {username} msg = {message} />
    </div>
  )
}

export default App
