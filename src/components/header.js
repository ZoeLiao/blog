import React, { Component } from "react";
import { Link } from "gatsby"

const navbarLogoStyle = {
    fontSize: '36px',
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Times',
}

const navbarLinkStyle = {
    marginRight: '15px',
    color: 'black',
    textDecoration: 'none',
}

const headerStyle = {
    padding: 20,
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '40px',
    alignItems: 'center',
    boxShadow: '0 0 25px 0 black',
}

const navbarStyle = {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '10px',
    maxWidth: 860,
}

const Header = () => (
    <div style={headerStyle}>
        <nav style={navbarStyle}>
            <div style={{ display: 'inline-block'}}>
                <Link style={navbarLogoStyle} to="">ZoeLiao</Link>
            </div>
            <div style={{ display: 'inline-block', float: 'right', mariginTop: '10px'}}>
                <Link style={navbarLinkStyle} to="posts/about/">About</Link>
                <Link style={navbarLinkStyle} to="">Note</Link>
                <Link style={navbarLinkStyle} to="">Project</Link>
                <a style={navbarLinkStyle} href="https://github.com/ZoeLiao" target="_blank">Github</a>
            </div>
        </nav>
    </div>
)

export default Header;
