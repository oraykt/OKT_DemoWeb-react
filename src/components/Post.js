import React, { Component } from 'react';
import Axios from 'axios';


class Post extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        //console.log(this.props);
        let id = this.props.match.params.postId;
        Axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => {
                this.setState({
                    data: res.data
                });
            });
    }
    render() {
        const post = this.state.data ? (
            <div>
                <h4 className="center">{this.state.data.title}</h4>
                <p className="center">{this.state.data.body}</p>
            </div>
        ) : (
                <div className="center"> Veriler Yukleniyor...</div>
            )
        return (
            <div>
                {post}
            </div>
        )
    }
}

export default Post;