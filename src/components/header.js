import React from 'react'
import { AlertCircle, Book, Home } from 'react-feather'
import { Link } from "gatsby"

const Header = () => {
  return (
    <header style={{
      backgroundColor: "white",
      marginBottom: '16px',
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        maxWidth: "700px",
        margin: "0 auto"
      }}>
        <Link to="/" style={{ margin: "0 auto" }}>
          <Home color="black" size={24} />
        </Link>
        <Link to="/informasi" style={{ margin: "0 auto" }}>
          <AlertCircle color="black" size={24} transform="rotate(180)" />
        </Link>
        <Link to="/kalkulator" style={{ margin: "0 auto" }}>
          <Book color="black" size={24} />
        </Link>
      </div>
    </header>
  )
}

export default Header