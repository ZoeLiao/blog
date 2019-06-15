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
    height: '20px',
    alignItems: 'center',
    zIndex: 2000,
	boxShadow: '0 0 1px 0 grey'
}

const navbarStyle = {
    marginTop: '-10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 860,
}

const RightNavbarStyle = {
    display: 'inline-block',
    float: 'right',
    marginTop: '10px',
}

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		    prevScrollpos: window.pageYOffset,
		    visible: true
		};
    }

	render() {
		return (
			<div style={(this.visibe ? {boxShadow: '0 0 0px 0 grey'}: {boxShadow: '0 0 1px 0 grey'}), headerStyle}>
				<nav style={navbarStyle}>
					<div style={{ display: 'inline-block'}}>
						<Link style={navbarLogoStyle} to="">ZoeLiao</Link>
					</div>
					<div style={RightNavbarStyle}>
						<Link style={navbarLinkStyle} to="posts/about/">About</Link>
						<Link style={navbarLinkStyle} to="">Note</Link>
						<Link style={navbarLinkStyle} to="">Project</Link>
						<a style={navbarLinkStyle} href="https://github.com/ZoeLiao" target="_blank">Github</a>
					</div>
				</nav>
			</div>
		)
	}
}


export default Header;
