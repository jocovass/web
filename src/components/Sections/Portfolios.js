import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, SecondaryTitle } from '../elements/elements'
import Portfolio from '../templates/Portfolio'

const PortfoliosStyles = styled.section`
  margin-top: 5rem;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 28rem));
    grid-gap: 2rem 5rem;
    justify-content: center;
    justify-items: center;
  }
`

function Portfolios() {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/projects/" }
        }
        sort: { fields: [dir], order: DESC }
      ) {
        edges {
          node {
            childMarkdownRemark {
              html
              htmlAst
              frontmatter {
                title
                live
                source
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PortfoliosStyles>
      <Container>
        <SecondaryTitle>Portfolio</SecondaryTitle>
        <div className="grid">
          {edges.map((edge, i) => {
            return <Portfolio item={edge.node.childMarkdownRemark} key={i} />
          })}
        </div>
      </Container>
    </PortfoliosStyles>
  )
}

export default Portfolios
