import React from 'react'
import { AlertCircle, Book, Home } from 'react-feather'
import { Link } from "gatsby"

import "./styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <Link to="/" className="content-item">
          <Paperclip color="black" size={24} />
        </Link>
        <Link to="/informasi" className="content-item">
          <AlertCircle color="black" size={24} transform="rotate(180)" />
        </Link>
        <Link to="/kalkulator" className="content-item">
          <Book color="black" size={24} />
        </Link>
      </div>
    </header>
  )
}

export default Header