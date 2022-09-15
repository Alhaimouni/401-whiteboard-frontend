import axios from "axios";
import PostCard from "./PostCard"

function Main({ data, dfunc }) {


  return (
    <div className='main'>
      {data.map((item,i)=><PostCard key={i} item={item} dfunc={dfunc}/>)}
    </div>
  )



}




export default Main
