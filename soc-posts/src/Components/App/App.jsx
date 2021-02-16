import React from 'react'
import AppHeader from "../AppHeader/AppHeader";
import SearchPannel from "../SearchPannel/SearchPannel"
import PostsStatusFilter from "../PostsStatusFilter/PostsStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";
import style from './App.module.css'


const App = () => {
    const postData=[
        {text:"I want to learn React",favorite:true, liked:true },
        {text:"I make it tomoroow",favorite:false,liked:true },
        {text:"Eat some icecream",favorite:true,liked:false }
        ]


    return (<div className={`app d-flex flex-column ${style.wrapper}`}>
        <div className="w-50 pt-5 mx-auto">
            <AppHeader postData={postData}/>
            <div className="search-panel d-flex">
                <SearchPannel/>
                <PostsStatusFilter/>
            </div>
            <PostList postData={postData}/>
            <PostAddForm/>
        </div>
    </div>)
}

export default App
