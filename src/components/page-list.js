import { Link } from "gatsby"
import React from "react"
import { graphql, StaticQuery } from "gatsby"

const PageList = () => {
    return (
        <StaticQuery
            query={graphql`
                query SitemapQuery{
                    allSitePage(filter: {path: {ne: "/sitemap/"}}) {
                        edges {
                            node {
                            id
                            path
                            }
                        }
                    }
                }
            `  
             }
             render={data =>
                <ul>
                    {data.allSitePage.edges.map(({node})=> (
                     <li><Link to={node.path}>{node.id}</Link></li>
                    ))}
                 </ul>
             }
        />

    )
}

export default PageList