import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
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
            <>
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
                <div style={layoutStyle}>
                    <div style={postStyle}>
                        {props.children}
                    </div>
                </div>
                <Footer />
                </>
        )}
    />
)
export default Layout
