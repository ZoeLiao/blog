import React from "react"

// TODO: Fix position
const footerStyle = {
    backgroundColor: 'black',
    position: 'fixed',
    bottom: '-10px',
    left: '-20px',
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
            <p>© 2019. All rights reserved.</p>
        </div>
    </footer>
)

export default Footer;
