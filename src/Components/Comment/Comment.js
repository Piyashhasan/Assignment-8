import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Images from '../Images/Images';

const Comment = (props) => {
    const { postDetailId } = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${postDetailId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    }, [])

    return (
        <div>
            <Images></Images>
            <h4> Name : <small> {comment.name}</small> </h4>
            <h4>Email : <small>{comment.email}</small> </h4>
            <p><small>{comment.body}</small></p>
        </div>
    );
};

export default Comment;