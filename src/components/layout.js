import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header';
import HeaderImage from './HeaderImage';
import Footer from './Footer';
import './Layout.css';

const layoutStyle = {
    height: '100%',
    backgroundSize: 'cover',
    fontFamily: 'sans-serif',
    padding: '30px',
}

const postStyle = {
    margin: '10px auto',
    maxWidth: 800,
}

const Layout = (props) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: "ZoeLiao's blog" },
                        { name: 'keywords', content: 'code' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <Header />
                <HeaderImage />
                <div style={layoutStyle}>
                    <div style={postStyle}>
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )}
    />
)
export default Layout
