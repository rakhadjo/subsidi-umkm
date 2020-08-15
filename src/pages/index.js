import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GarudaImage from "../components/GarudaImage"

const IndexPage = () => (
  <Layout align="center">
    <SEO title="Home" />
    <GarudaImage />
    <div style={{ color: "#27c495" }}>
      <h1>umkm</h1>
    </div>
    <h4>Ringkasan PMK Subsidi Bunga/Margin UMKM Program Pemulihan Ekonomi Nasional Dalam Rangka Mendukung Kebijakan Keuangan Negara Untuk Penanganan Pandemi Corona Virus Disease 2019 (COVID-19)</h4>
  </Layout >
)

export default IndexPage