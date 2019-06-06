import React from 'react';
import Layout from '../components/layout';
import Post from "./../components/post"

import { graphql } from 'gatsby'
import Img from 'gatsby-image';

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
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
}
`
