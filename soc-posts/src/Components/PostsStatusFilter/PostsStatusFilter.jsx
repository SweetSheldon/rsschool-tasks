import React, {Component} from 'react'


class PostsStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'All', text: 'All'},
            {name: 'Liked', text: 'Liked'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, text}) => {
            const current = this.props.filter === name ? 'btn-primary' : 'btn-outline-secondary'
            return (<button type='button'
                            key={name}
                            onClick={()=>{this.props.onUpdateFilter(name)}}
                            className={`btn ${current}`}>{text}</button>)
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }


}

export default PostsStatusFilter
