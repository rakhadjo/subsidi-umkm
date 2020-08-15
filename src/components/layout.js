import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./styles/layout.css"

const Layout = ({ children, align }) => {
  return (
    <>
      <Header />
      <div
        style={{
          position: 'relative',
          top: 80,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main align={align || "left"}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
