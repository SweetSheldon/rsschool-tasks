import React from 'react'


const AppHeader =(props) =>{
    let count = props.postData.length
    let likesCount=0;
    props.postData.map((item)=>{
    if(item.liked){likesCount++}
    })
    return(
        <div className="app-header d-flex flex-row justify-content-between">
            <h2>Alex Korsak</h2>
            <h2>Favorite {likesCount} of {count} posts</h2>
        </div>
    )
}

export default AppHeader
