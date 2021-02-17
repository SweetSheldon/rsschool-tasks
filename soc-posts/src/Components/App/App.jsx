import React, {Component} from 'react'
import AppHeader from "../AppHeader/AppHeader";
import SearchPannel from "../SearchPannel/SearchPannel"
import PostsStatusFilter from "../PostsStatusFilter/PostsStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";
import style from './App.module.css'


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            postData:[
                {text:"I want to learn React",favorite:true, liked:true, id: 1 },
                {text:"I make it tomoroow",favorite:false,liked:true, id: 2 },
                {text:"Eat some icecream",favorite:true,liked:false, id: 3 }
            ],
            searchString:''
        }
        this.maxId = 4
        this.deleteItem=this.deleteItem.bind(this)
        this.addItem=this.addItem.bind(this)
        this.actionWithItem=this.actionWithItem.bind(this)
        this.onUpdateSearch=this.onUpdateSearch.bind(this)
    }

    deleteItem(id){
        this.setState(({postData})=>{
            let index = postData.findIndex((elem)=>elem.id === id)
            let newPostData = [...this.state.postData.slice(0,index),...this.state.postData.slice(index+1)]
            return {postData:newPostData}
        })
    }

    addItem(text){
    let newElem = {text:text,favorite:false,liked:false, id: this.maxId++}
        this.setState(({postData})=>{
            return {postData:[...postData, newElem]}
        })

    }

    actionWithItem(action, id){
        this.setState(({postData})=>{
            let index = postData.findIndex((elem)=>elem.id === id)
            let old = postData[index];
            let newItem
            if(action=='favorite'){newItem = {...old, favorite: !old.favorite}}
            else if(action=='like'){newItem = {...old, liked: !old.liked}}
            let newPostData = [...this.state.postData.slice(0,index),newItem,...this.state.postData.slice(index+1)]
            return {postData:newPostData}
        })

    }

    searchItems(items,string){
        if(string.length===0){
            return items
        }

      return items.filter((item)=>{
           return item.text.toLowerCase().indexOf(string.toLowerCase()) > -1
        })
    }

    onUpdateSearch(string){
        this.setState({searchString:string})
    }

    render() {
    const{postData, searchString} = this.state
    const visiblePost = this.searchItems(postData,searchString)

    return (<div className={`app d-flex flex-column ${style.wrapper}`}>
        <div className="w-50 pt-5 mx-auto">
            <AppHeader postData={visiblePost}/>
            <div className="search-panel d-flex">
                <SearchPannel
                    onUpdateSearch={this.onUpdateSearch}/>
                <PostsStatusFilter/>
            </div>
            <PostList postData={visiblePost}
                      actionWithItem={(action, id)=>{this.actionWithItem(action, id)}}
                      onDelete={(id)=>{this.deleteItem(id)}}/>
            <PostAddForm addItem={(text)=>{this.addItem(text)}}/>
        </div>
    </div>)
}}

export default App
