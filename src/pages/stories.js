import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StoriesPage = () => (
  <Layout>
    <SEO title="Stories" />
    <h1>SME Stories and Testimonies</h1>
    <Link to="/about/">About us</Link> 
    <Link to="/form/">Form</Link> 
    <Link to="/stories/">SME Stories</Link>
  </Layout>
)

export default StoriesPage
