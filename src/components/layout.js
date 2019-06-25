import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header';
import HeaderImage from './HeaderImage';
import Footer from './Footer';
import './Layout.css';
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';


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

const Layout = (props) => {
    return (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        languages {
                            defaultLangKey
                            langs
                        }
                    }
                }
            }
        `}
        render={data => { 
            const url = props.location.pathname;
            const { langs, defaultLangKey } = data.site.siteMetadata.languages;
            const langKey = getCurrentLangKey(langs, defaultLangKey, url);
            const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
            const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));

            return (
            <IntlProvider
                locale={langKey}
            >
                <div>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: "ZoeLiao's blog" },
                            { name: 'keywords', content: 'code' },
                        ]}
                    >
                        <html lang={ langKey } />
                    </Helmet>
                    <Header langs={ langsMenu } CurLang={ langKey }/>
                    <HeaderImage />
                    <div style={layoutStyle}>
                        <div style={postStyle}>
                            {props.children}
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Footer />
                </div>
            </IntlProvider>
        )}}
    />)
}

export default Layout
