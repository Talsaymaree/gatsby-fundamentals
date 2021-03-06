import { useStaticQuery, graphql } from "gatsby" 

export const useSiteMetada = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData{
                site{
                    siteMetadata{
                        title
                        description
                    }
                }
            }
        `
    )
    return site.siteMetadata
}