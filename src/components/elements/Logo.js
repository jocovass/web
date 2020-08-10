import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

function Logo() {
  let data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "app-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 115, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: '4.5rem' }}>
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
    </div>
  )
}

export default React.memo(Logo)
