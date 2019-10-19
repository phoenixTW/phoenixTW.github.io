import React from "react"
import PropTypes from "prop-types"

import "./Icon.scss"

const Icon = ({ name, size, className }) => <i className={`ph-icon-${name} icon-${size} ${className}`} />

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  size: "small",
  className: ""
}

export default Icon
