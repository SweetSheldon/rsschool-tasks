import React from 'react'


const PostAddForm =(props) =>{
    return(
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What are you thinking about?"
                className="form-control new-post-label"
            />
            <button type="submit" onClick={()=>props.addItem('Test')} className="btn btn-outline-secondary text-nowrap">Add post</button>
        </div>
    )
}

export default PostAddForm
