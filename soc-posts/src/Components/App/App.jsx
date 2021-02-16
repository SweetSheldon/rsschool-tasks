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
            maxId:4
        }
        this.deleteItem=this.deleteItem.bind(this)
        this.addItem=this.addItem.bind(this)
    }

    deleteItem(id){
        this.setState(({postData})=>{
            let index = postData.findIndex((elem)=>elem.id === id)
            console.log('index: ', index,'id: ',id)
            let newPostData = [...this.state.postData.slice(0,index),...this.state.postData.slice(index+1)]
            return {postData:newPostData}
        })
    }

    addItem(text){
    let newElem = {text:text,favorite:false,liked:false, id: this.state.maxId++}
        this.setState(({postData})=>{
            return {postData:[...postData, newElem]}
        })
    }


    render() {


    return (<div className={`app d-flex flex-column ${style.wrapper}`}>
        <div className="w-50 pt-5 mx-auto">
            <AppHeader postData={this.state.postData}/>
            <div className="search-panel d-flex">
                <SearchPannel/>
                <PostsStatusFilter/>
            </div>
            <PostList postData={this.state.postData} onDelete={(elemId)=>{this.deleteItem(elemId)}}/>
            <PostAddForm addItem={(text)=>{this.addItem(text)}}/>
        </div>
    </div>)
}}

export default App
