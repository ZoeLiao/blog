import React from "react"
import Layout from "./../components/layout" 
import Card from "./../components/card" 
import { Link } from "gatsby"

const categoryBtn = {
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

export default () => (
    <Layout>
        <Card>
            <h1 style={{display: 'inline'}}>Title: About Flask</h1>
            <button style={categoryBtn}>python</button>
            <hr/>
            <h4>time</h4>
            <h4>descript</h4>
            <p>This is a test post </p>
            <p>This is a test post </p>
        </Card>
    </Layout>
)
