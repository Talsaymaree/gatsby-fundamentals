import React from`react`
import {graphql, useStaticQuery } from `gatsby`

const UseStaticQuery = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetedata{
                    title
                }
            }
        }
    `)
    return (
        <div>{data.site.siteMetadata.title}</div>
    )
}

export default UseStaticQuery