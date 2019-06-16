import React from 'react';
import Layout from '../components/Layout';
import Post from "./../components/Post"
import Metatags from '../components/Metatags';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteURL;
    const { title, description } = post.frontmatter;
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
                    <h1>{title}</h1>
                    {image && <Img fluid={image.childImageSharp.fluid} />}
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
                image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                            src
                        }
                        fluid(maxWidth: 786) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                siteURL
            }
        }
    }
`
