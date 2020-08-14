import React from "react"
import { Link } from "gatsby"

import IndexLayout from "../components/index_layout"
import SEO from "../components/seo"
import Image from "../components/image"


const IndexPage = () => (
  <IndexLayout>
    <SEO title="Home" />
    <div style={{color: `green`}}>
      <h1>UMKM</h1>
    </div>
    <Image />
    <h2>PELAKSANAAN PROGRAM PEMULIHAN EKONOMI NASIONAL DALAM RANGKA MENDUKUNG KEBIJAKAN KEUANGAN NEGARA UNTUK PENANGANAN PANDEMI CORONA VIRUS DISEASE (COVID-19)</h2>
    <Link to="/about/">About us </Link>
    <Link to="/form/">Form </Link>
    <Link to="/stories/">SME Stories </Link>
  </IndexLayout>
)

export default IndexPage