import React from 'react';
import Layout from '../components/Layout';
import Post from "./../components/Post"
import Metatags from '../components/Metatags';

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
                        <h4>{date}</h4>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Post>
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
