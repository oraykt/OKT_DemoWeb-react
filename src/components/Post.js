import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/deleteAction';

class Post extends Component {

    handleClick = () => {
        //console.log(this.props);
        this.props.PostSil(this.props.data.id);
        this.props.history.push('/')
    }

    render() {
        const post = this.props.data ? (
            <div>
                <h4 className="center">{this.props.data.title}</h4>
                <p className="center">{this.props.data.body}</p>
                <button className="btn grey" onClick={this.handleClick}>Sil</button>
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

const mapStateToProps = (state, selfProps) => {
    let id = selfProps.match.params.postId;
    return {
        data: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        PostSil: (id) => {
            dispatch(deletePost)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);