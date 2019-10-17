import React from "react"
import PropTypes from "prop-types"

const Icon = ({ name }) => <i className={`fab fa-${name}`}></i>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
