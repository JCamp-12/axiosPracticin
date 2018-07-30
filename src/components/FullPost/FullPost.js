import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
                    .then(response => {
                    // console.log(response.data)
                    this.setState({ loadedPost: response.data})
                    // console.log(response.data.id)
                    // console.log(response.data.body)
                    // console.log(response.data.title)
                    // this.setState({ loadedPost: response.data})
                })
            }
            
            
        }
        
    }

    render () {
        console.log('this is prop id ' + this.props.id)
        console.log('this is loadedPost: ' , this.state.loadedPost)
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
            let post = <p style={{textAlign: 'center'}}>Loading...</p>;
            
        } 
        // console.log(post)
        if ( this.state.loadedPost) {
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
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