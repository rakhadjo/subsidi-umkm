import React from 'react'
import { AlertCircle, Book, Paperclip } from 'react-feather'
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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px"
      }}>
        <Link to="/">
          <Paperclip color="black" size={24} />
        </Link>
        <Link to="/informasi">
          <AlertCircle color="black" size={24} />
        </Link>
        <Link to="/kalkulator">
          <Book color="black" size={24} />
        </Link>
      </div>
    </header>
  )
}

export default Header