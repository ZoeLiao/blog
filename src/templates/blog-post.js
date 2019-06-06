import React from 'react';
import Layout from '../components/layout';
import Post from "./../components/post"
import Metatags from '../components/Metatags';

import { graphql } from 'gatsby'
import Img from 'gatsby-image';

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteURL;
    const { title, description } = post.frontmatter;
    const thumbnail = post.frontmatter.image.childImageSharp.resize.src;
    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                thumbnail={url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div>
                <Post>
                    <h1>{title}</h1>
                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
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
