import React,{Component} from 'react'


class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let count = this.props.postData.length
        let favoritesCount = this.props.postData.filter(el=>el.favorite).length
        return (
            <div className="app-header d-flex flex-row justify-content-between">
                <h2>Alex Korsak</h2>
                <h2>Favorite {favoritesCount} of {count} posts</h2>
            </div>
        )
    }
}

export default AppHeader
