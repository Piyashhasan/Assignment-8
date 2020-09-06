import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])
    const h2Style = {
        color:'orange',
        borderBottom: '1px solid lightgray',
        textAlign: 'center',
        paddingBottom: '15px'
    }
    return (
        <div>
            <h2 style={h2Style}> <small>Total post: {posts.length}</small> </h2>
            {
                posts.map(post => <Post post={post} key={post.key}></Post>)
            }
            
        </div>
    );
};

export default Home;