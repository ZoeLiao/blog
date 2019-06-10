import React from "react"

const footerStyle = {
    backgroundColor: 'black',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20px',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
}

const copyRightStyle = {
    margin: '-20px auto',
    maxWidth: 860,
    color: 'white'
}

const Footer = () => (
    <footer style={footerStyle}>
        <div style={copyRightStyle}>
            <p>Copyright © 2019 ZoeLiao</p>
        </div>
    </footer>
)

export default Footer;
