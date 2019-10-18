import React from "react"
import PropTypes from "prop-types"

import "./Icon.scss"

const Icon = ({ name, size }) => <i className={`fab fa-${name} icon-${size}`}></i>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Icon.defaultProps = {
  size: "small"
}

export default Icon
