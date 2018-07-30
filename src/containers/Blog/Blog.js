import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        eventSelectID: null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {

            const post = response.data.slice(0,6)
            const updatedPosts = post.map(post => {
                return {
                    ...post,
                    author: 'Jason'
                }
            })
            this.setState({ posts: updatedPosts})
            // console.log(response)
            // for(let i=0; i< response.data.length;i++) console.log('this is ' + i + ': ' , response.data[i])
        });
    }

    eventSelectHandler = (id) => {
        this.setState({eventSelectID: id})
    }

    eventSelectID = (id) => {
        console.log(id)
    }

    render () {
        // just playing around
        if(this.state.posts.length >1) console.log(this.state.posts)
        // for real now
        const posts = this.state.posts.map(posts => {
            
            return <Post 
            key={posts.id} 
            clicked={() => {
                this.eventSelectHandler(posts.id)
                this.eventSelectID(posts.id)
            }} 
            title={posts.title} author={ posts.author }  
            body={ posts.body } />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.eventSelectID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;