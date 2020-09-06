import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";


const PostDetail = () => {
    const { postDetailId } = useParams();

    const [postDetail, setPostDetail] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetailId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setPostDetail(data))
    }, [])

    const PostDetailStyle = {
        width: '75%',
        margin: '0 auto',
        marginTop: '20px',
        textAlign: 'center',
        textDecoration: "justify",
    }
    return (
        <div style={PostDetailStyle}>
        <h1 style ={{color: 'orange', borderBottom:'2px solid orange', paddingBottom: '10px'}}>INFORMATION</h1>
        <h3>Title : {postDetail.title}</h3>
        <h4>Body : <small>{postDetail.body}</small></h4>
        <h1 style={{color: 'gray', borderBottom:'2px solid lightgray', paddingBottom: '10px'}}>Comments</h1>
        <Comment></Comment>
        </div>
        
    );
};

export default PostDetail;
