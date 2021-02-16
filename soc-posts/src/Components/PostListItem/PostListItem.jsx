import React, {Component} from 'react'
import style from './PostListItem.module.css'


class PostListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, onDelete, actionWithItem} =this.props
        const {favorite,liked} =this.props
        let favoriteClass = `${style.PostItem} app-list-item d-flex justify-content-between w-75 m-auto p-2`
        if (favorite) {
            favoriteClass += ` ${style.favorite}`
        }
        let likedClass = `fa fa-heart ${style.heart}`
        if(liked){
            likedClass += ` ${style.liked}`
        }
        return (
            <div className={favoriteClass}>
                <span className="app-list-item-label">{text}</span>
                <div className="d-flex justify-content-around w-25  allign-items-center pr-3">
                    <button onClick={()=>actionWithItem('favorite')}
                            className={`btn-star btn-sm ${style.star}`}
                            type="button">
                        <i className="fa fa-star"></i>
                    </button>
                    <button onClick={onDelete}
                            className={`trash btn-sm ${style.trash}`}
                            type="button">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i onClick={()=>actionWithItem('like')}
                       className={likedClass}></i>

                </div>
            </div>
        )
    }
}


export default PostListItem
