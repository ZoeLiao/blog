import React from "react"
import Layout from "./../components/Layout" 

const NotFoundHeader = {
    fontSize: '72px',
    textAlign: 'center'
}

const NotFoundParagaph = {
    fontSize: '32px',
    textAlign: 'center'
}

const NotFoundPage = (props) => {
    return (
        <div style={{ background: '#f6f6f6'}}>
            <Layout>
                <h1 style={ NotFoundHeader }>Oops!</h1>
                <h1 style={ NotFoundParagaph }>Nothing to see here.</h1>
                <h1 style={ NotFoundParagaph }>Maybe you can find it by changing the language</h1>
                <br/>
            </Layout>
        </div>
    )
}

export default NotFoundPage;
