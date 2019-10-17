import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import "./Layout.scss"

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout__wrapper">
                <Header />
                <main className="layout__container">{children}</main>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
