import React from "react"
import { Link,graphql } from "gatsby"
import HelloWorld from "../components/helloWorld"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PureBootStarp from "../components/pure-bootstrap"
import ReactBootStarp from "../components/react-bootstrap"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <p>Welcome.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Link to="/contact-us/"> Contact</Link>
      <HelloWorld name="Tee"/>
      <Image />
    </div>
  <PureBootStarp />
  <ReactBootStarp />
  </Layout>
)


export default IndexPage
