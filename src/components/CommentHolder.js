import React from 'react'

function CommentHolder({data}) {
  return (
    <div className='cmntHolder'>
      {data.map((item,i)=> <><p key={i}> {item.text}</p><hr></hr></>)}
    </div>
  )
}

export default CommentHolder
