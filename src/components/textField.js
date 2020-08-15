import React from 'react'
import PropTypes from 'prop-types'

import "./styles/textField.css"

const TextField = ({ title, placeholder, error, value, onChange }) => {
  const onChangeHandler = (event) => {
    onChange(event.target.value)
  }

  return (
    <>
      <div className="title">{title}</div>
      <input
        className={error ? "input-error" : "input"}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      {error && <div className="error">{error}</div>}
    </>
  )
}

TextField.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string
}

export default TextField