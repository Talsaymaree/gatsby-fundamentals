import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import propTypes from "prop-types"

const Blogpost = ({title, author, abstract, children}) => {
    return (
    <Layout>
    <SEO title="Home" />
    
    <h1>{title}</h1>

    {author &&
    <div>By {author.firstName}, {author.lastName}</div>
    }
    <div dangerouslySetInnerHTML= {abstract} />

    <div>
         {children}
        
    </div>
    </Layout>
    )
}


Blogpost.defaultProps = {
    title: "title goes here"
}

Blogpost.propTypes = {
    title: propTypes.string,
    author: propTypes.object,
    children: propTypes.node.isRequired
}

export default Blogpost