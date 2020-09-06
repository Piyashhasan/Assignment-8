import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Post = (props) => {
    const {id} = props.post;
    const postStyle = {
        width: "50%",
        margin: "0 auto",
        marginBottom: "30px",
        padding: "20px",
        boxShadow: '5px 10px 20px gray',
        borderRadius: "10px",
        textAlign: "center",
        textDecoration: "justify",
    };
    return (
        <div style={postStyle}>
            <h2>Post from</h2>
            <h4>ID : {id} </h4>
            <Button  variant="contained" color="secondary">
                <Link style = {{color: "white" , textDecoration: "none"}} to={`/post/${id}`}>tab for more info</Link> 
            </Button>
        </div>
    );
};

export default Post;
