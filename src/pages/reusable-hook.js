import React from "react"
import Layout from "../components/layout"
import { useSiteMetadata } from "../hooks/siteMetadataHook"

const ReusableHookPage = () => {
    const { title } = useSiteMetadata()
    return(
        <Layout>
           Welcome to {title}
        </Layout>
    )
}

export default ReusableHookPage
