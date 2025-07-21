import React from 'react'

const GreetingPropsFunction = (props) => {
  return (
    <div>
      <h2>Hi {props.username} and my message is {props.msg}</h2>
    </div>
  )
}

export default GreetingPropsFunction
