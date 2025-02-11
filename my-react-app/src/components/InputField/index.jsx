import React from 'react'

const index = ({text, handleInput, handleSubmit}) => {
  return (
  <label>
    <input value = {text} onChange={(e)=> handleInput(e.target.value)}/>
    <button onClick = {handleSubmit}>Add Todo</button>
  </label>

  )
}

export default index
