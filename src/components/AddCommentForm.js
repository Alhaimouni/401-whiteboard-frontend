import React from 'react'

function AddCommentForm() {
  return (
    <div>
      <form className='form'>
        <input type='text' name='comment' placeholder='Commnet..'></input>
        <input type='submit' name='submit'></input>
      </form>
    </div>
  )
}

export default AddCommentForm
