import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Resim from '../favicon.ico'
import { connect } from 'react-redux';


class Anasayfa extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 8)
                })
            });
    }

    render() {
        const { posts } = this.props;
        const postListesi = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card blue-grey darken-1" key={post.id}>
                        <div className="card-content white-text">
                            <img src={Resim} />
                            <Link to={"/" + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div >
                )
            })
        ) : (
                <div>Veri Yok</div>
            );
        return (
            <div className="container" >
                <div className="center"><h4>First 8 Data from store</h4></div>
                {postListesi}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Anasayfa);