import React, { Component } from "react";
import { Link } from "gatsby"

const cardStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '100%',
    height: '300px',
    borderRadius: '5px',
    marginTop: '30px',
    padding: '10px',
}

const cardContainerStyle = {
    padding: '16px 16px',
}

const Card = (props) => (
    <div style={cardStyle}>
        <div style={cardContainerStyle}>
            {props.children}
        </div>
    </div>
)

export default Card;
