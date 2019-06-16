import React, { Component } from "react";
import { Link } from "gatsby"

const postStyle = {
    transition: '0.3s',
    width: '100%',
    height: '90%',
    marginTop: '-50px',
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
