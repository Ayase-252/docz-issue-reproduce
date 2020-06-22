import React from "react"
import t from "prop-types"

const Button = ({ text, onClick, size }) => {
  const width = size === "small" ? 40 : 60
  const height = width * 0.3
  return (
    <input
      type="button"
      value={text}
      onClick={onClick}
      style={{ width, height }}
    />
  )
}

Button.propTypes = {
  text: t.string,
  onClick: t.func,
  size: t.oneOf(["small", "large"]),
}

export default Button
