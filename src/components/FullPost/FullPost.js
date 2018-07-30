import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    componentDidUpdate () {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response.data)
        })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
        post = (
            <div className="FullPost">
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        }
        return post;
    
    }
}

export default FullPost;