import React from "react"
import { graphql, StaticQuery } from "gatsby"

const StaticQueryComponent = () => {
    return(
        <StaticQuery
            query={graphql`
                query{
                    site{
                        siteMetadata{
                            title
                        }
                    }
                }
            
            `}
            render={data =>
                <div>{data.site.siteMetadata.title}</div>
            }
            />
    )
}

export default StaticQueryComponent
