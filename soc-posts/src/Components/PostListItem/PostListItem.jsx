import React, {Component} from 'react'
import style from './PostListItem.module.css'


class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: this.props.favorite,
            liked: this.props.liked
        }
        this.onFavorite = this.onFavorite.bind(this)
        this.onLike = this.onLike.bind(this)
    }

    onFavorite() {
        this.setState(({favorite}) => ({
            favorite: !favorite
        }))
    }
    onLike() {
        this.setState(({liked}) => ({
            liked: !liked
        }))
    }
    render() {
        const {text} =this.props
        const {favorite,liked} =this.state
        let favoriteClass = `${style.PostItem} app-list-item d-flex justify-content-between w-75 m-auto p-2`
        if (favorite) {
            favoriteClass += ` ${style.favorite}`
        }
        let likedClass = `fa fa-heart ${style.heart}`
        if(liked){
            likedClass += ` ${style.liked}`
        }
        return (
            <li className={favoriteClass}>
                <span className="app-list-item-label">{text}</span>
                <div className="d-flex justify-content-around w-25  allign-items-center">
                    <button onClick={this.onFavorite} className={`btn-star btn-sm ${style.star}`} type="button">
                        <i className="fa fa-star"></i>
                    </button>
                    <button className={`trash btn-sm ${style.trash}`} type="button">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i onClick={this.onLike} className={likedClass}></i>

                </div>
            </li>
        )
    }
}


export default PostListItem
