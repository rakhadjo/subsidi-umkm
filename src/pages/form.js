import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Formulir = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Formulir Registrasi</h1>
    <p>Will be used for applying for help etc</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Formulir
