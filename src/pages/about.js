import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <div align = "center">
    <img
      src="https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
      alt="agatha"
      height="200"
      width="200"
    />
    <img
      src="https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
      alt="james"
      height="200"
      width="200"
    />   
    <img
      src="https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
      alt="rakha"
      height="200"
      width="200"
    />
    <img
      src="https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg"
      alt="russel"
      height="200"
      width="200"
    />
    <br />
    
    </div>
  </Layout>
)

export default AboutUs
