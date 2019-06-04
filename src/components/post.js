import React, { Component } from "react";
import { Link } from "gatsby"

const postStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '100%',
    height: '90%',
    borderRadius: '5px',
    marginTop: '30px',
    padding: '10px',
}

const postContainerStyle = {
    padding: '16px 16px',
}

const Post = (props) => (
    <div style={postStyle}>
        <div style={postContainerStyle}>
            {props.children}
        </div>
    </div>
)

export default Post;
