import React from 'react'
import PostListItem from '../PostListItem/PostListItem'

const PostList =(props) =>{
let postItems = props.postData.map((item)=>{
   return( <PostListItem text={item.text} onDelete={()=>props.onDelete(item.id)} key={item.id}  favorite={item.favorite} liked={item.liked}/> )
})
    return(
        <ul className="app-list list-group p-2">
            {postItems}
        </ul>
    )
}

export default PostList
