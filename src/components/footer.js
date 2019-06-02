import React from "react"

const footerStyle = {
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20px',
    alignItems: 'center',
    padding: '20px',
}

const copyRightStyle = {
    margin: '-20px auto',
    maxWidth: 860,
}

const Footer = () => (
    <div style={footerStyle}>
        <div style={copyRightStyle}>
            <p>Copyright © 2019 ZoeLiao</p>
        </div>
    </div>
)

export default Footer;
