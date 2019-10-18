import React from "react";
import PropTypes from "prop-types";

import "./OrgDetails.scss"

const OrgDetails = ({ name, link, role, start, end }) => (
    <div className="org-details__wrapper">
        <h4>
            {role}
            <span className="org-details__company">
                @
                <a href={link}>{name}</a>
            </span>
        </h4>
        <p className="org-details__timeline">
            {start} - {end || "Present"}
        </p>
    </div>
)

OrgDetails.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
}

OrgDetails.defaultProps = {
    end: null
}

export default OrgDetails
