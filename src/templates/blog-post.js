import React from 'react';
import Layout from '../components/Layout';
import Post from "./../components/Post"
import Metatags from '../components/Metatags';

import { Link } from 'gatsby'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteURL;
    const title = post.frontmatter.title;
    const description = post.frontmatter.description;
    const date = post.frontmatter.date;
    const image = post.frontmatter.image;
    let thumbnail = url;
    if(image){
        thumbnail += image.childImageSharp.resize.src;
    }
    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                thumbnail={thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div>
                <Post>
                    <div style={{ marginBottom: '3rem'}}>
                        <h1>{title}</h1>
                        <h4 style={{ color: 'grey'}}>{date}</h4>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Post>
            </div>
            <br/>
            <div style={{ float: 'right' }}>
                <Link style={{
                    textDecoration: 'none',
                    color: 'grey'
                }} to='/'>&rarr; 返回首頁</Link>
            </div>
        </Layout>
    )
}

export default BlogPost;
export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                date(formatString: "MMMM Do YYYY")
            }
        }
        site {
            siteMetadata {
                siteURL
            }
        }
    }
`
