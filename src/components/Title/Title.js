import React from "react";
import PropTypes from "prop-types";

import "./Title.scss"

const Title = ({ children }) => (
    <h2 className="title__wrapper">{children}</h2>
)

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Title
