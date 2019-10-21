import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.scss"

const Header = () => (
    <header className="header__wrapper">
        <nav className="nav-bar__wrapper">
            <ul>
                <li className="signature">
                    <Link to="/">Kaustav Chakraborty</Link>
                </li>
                <li>
                    <Link to="/about/" activeClassName="nav-bar__active">About</Link>
                </li>
                <li>
                    <Link to="/projects/" activeClassName="nav-bar__active">Projects</Link>
                </li>
                <li>
                    <a href="https://github.com/itchef">ITChef</a>
                </li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
