import React from 'react'
import AddCommentForm from './AddCommentForm';
import CommentHolder from './CommentHolder';

function PostCard(props) {

  function deletePost() {
    props.dfunc(props.item.id);
  }
  
  return (
    <div className='postCard'>
      <button onClick={deletePost}>x</button>
      <button onClick={deletePost}>edit</button>
      <h3>{props.item.title}</h3>
      <p>{props.item.content}</p>
      {props.item.comments.length?<CommentHolder data={props.item.comments}/>:<p className='cmntHolderp'>No comments</p>}
      <AddCommentForm/>
    </div>
  )
}

export default PostCard
