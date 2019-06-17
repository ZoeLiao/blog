import React from "react"
import Layout from "./../components/Layout" 
import Card from "./../components/Card" 
import { Link, graphql } from 'gatsby'

const tagBtn = {
    width: '100px',
    height: '30px',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    fontWeight: 500,
    color: '#000',
    backgroundColor: '#ccffff',
    fontColor: 'black',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    outline: 'none',
    float: 'right',
}

const hrStyle = {
    border: 1,
    borderTop: '1px solid #ccc'
}


const IndexPage = (props) => {
    const postList = props.data.allMarkdownRemark;
    return (
        <div style={{ background: '#f6f6f6'}}>
            <Layout>
                {postList.edges.map(({ node }, i) => (
                    <Card>
                        <Link style={{ color: 'inherit', textDecoration: 'none'}} to={node.fields.slug}>
                            <div>
                                <h1 style={{ display: 'inline'}}>{node.frontmatter.title}</h1>
                                <button style={tagBtn}>{node.frontmatter.tags}</button>
                            </div>
                            <hr style={hrStyle}/>
                            <div>
                                <span>{node.frontmatter.date}</span>
                                <p>{node.excerpt}</p>
                            </div>
                        </Link>
                    </Card>
                 ))}
            </Layout>
        </div>
    )
}
export default IndexPage;
export const listQuery = graphql`
    query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    fields{
                        slug
                    }
                    excerpt(pruneLength: 100)
                    frontmatter {
                        date(formatString: "MMMM Do YYYY")
                        title
                        tags
                    }
                }
            }
        }
    }
`

