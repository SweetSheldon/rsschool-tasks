import React, {Component} from 'react'
import AppHeader from "../AppHeader/AppHeader";


class SearchPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString:''
        }
        this.onSearchUpdate=this.onSearchUpdate.bind(this)
    }
    onSearchUpdate(e){
        const string = e.target.value
        this.setState({string})
        this.props.onUpdateSearch(string)
    }
    render() {
        return (
            <input className="form-control search-input"
                   type="text"
                   placeholder="Input some text"
                   onChange={this.onSearchUpdate}/>
        )
    }
}

export default SearchPannel
