import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GarudaImage from "../components/GarudaImage"

const IndexPage = () => (
  <Layout align="center">
    <SEO title="Home" />
    <div style={{ color: `green` }}>
      <h1>umkm</h1>
    </div>
    <GarudaImage />
    <h2>PELAKSANAAN PROGRAM PEMULIHAN EKONOMI NASIONAL DALAM RANGKA MENDUKUNG KEBIJAKAN KEUANGAN NEGARA UNTUK PENANGANAN PANDEMI CORONA VIRUS DISEASE (COVID-19)</h2>
    <Link to="/about/">About us </Link>
    <Link to="/form/">Form </Link>
    <Link to="/stories/">SME Stories </Link>
  </Layout>
)

export default IndexPage