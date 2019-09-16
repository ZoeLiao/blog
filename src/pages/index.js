import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { Link, graphql } from 'gatsby'

const tagBtn = {
    width: '100px',
    height: '25px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    fontWeight: 500,
    color: '#000',
    backgroundColor: '#ccffff',
    fontColor: 'black',
    border: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    outline: 'none',
    float: 'right',
    display: 'inline'
}

const hrStyle = {
    border: 1,
    borderTop: '1px solid #ccc'
}


const IndexPage = (props) => {
    const postList = props.data.allMarkdownRemark;
    return (
        <div style={{ background: '#f6f6f6'}}>
            <Layout location={props.location}>
                {postList.edges.map(({ node }, i) => (
                    <Card>
                        <Link style={{ color: 'inherit', textDecoration: 'none'}} to={node.fields.slug}>
                            <div>
                                <h1>{node.frontmatter.title}</h1>
                            </div>
                            <hr style={hrStyle}/>
                            <div>
                                <span style={{color: 'grey', display: 'inline'}}>
                                    { node.frontmatter.date }
                                </span>
                                <button style={ tagBtn }>{node.frontmatter.tags}</button>
                                <p>{ node.excerpt }</p>
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
    query ListQueryZH {
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

