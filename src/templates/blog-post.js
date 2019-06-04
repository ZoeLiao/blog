import React from 'react';
import Layout from '../components/layout';
import Post from "./../components/card" 

import { graphql } from 'gatsby'

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <div>
                <Post>
                    <h1>{title}</h1>
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
       }
   }
}`

