import React from "react"

import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
    height: '125vh',
    width: '110wh',
    backgroundColor: '#FFF5EE',
    backgroundSize: 'cover',
    fontFamily: 'sans-serif',
    marginTop: '80px',
    padding: '30px',
}

const postStyle = {
    margin: '10px auto',
    maxWidth: 800,
}

const Layout = (props) => (
        <div>
            <Header />
            <div style={layoutStyle}>
                <div style={postStyle}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
)

export default Layout
