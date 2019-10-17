import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      loading="lazy"
      className={className}
      backgroundColor="#FFF"
      fadeIn
    />
  )
}

Image.propTypes = {
  className: PropTypes.string,
}

Image.defaultProps = {
  className: ``,
}

export default Image
