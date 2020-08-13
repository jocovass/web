import React from 'react'
import rehypeReact from 'rehype-react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TertiaryTitle } from '../elements/elements'

const PortfolioStyle = styled.div`
  background-color: var(--clr-secondary-light);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  margin-bottom: 3rem;
  transition: transform 0.3s ease-in-out;
  .portfolio__img {
    width: 100%;
    height: 170px;
    border-radius: 10px;
    &--head {
      height: 2rem;
      width: 100%;
      background-color: var(--clr-primary);
      border-radius: 10px 10px 0 0;
      padding: 0 10px;
      display: flex;
      align-items: center;
    }
    &--body {
      padding: 1.5rem;
    }
  }
  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    margin-right: 5px;
    &.red {
      background-color: red;
    }
    &.yellow {
      background-color: yellow;
    }
    &.green {
      background-color: green;
    }
  }
  .portfolio__desc {
    padding: 2rem;
    font-size: 1.2rem;
  }
  .portfolio__intro {
    line-height: 1.5;
    font-weight: 300;
  }
  .portfolio__footer {
    display: flex;
    justify-content: space-evenly;
  }
  .stack {
    margin-top: 1rem;
    font-weight: 900;
  }
  &:hover {
    transform: scale(1.2);
    z-index: 4;
  }
`
const Image = styled(Img)`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.13);
`

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  border-radius: 50px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  background-color: var(--clr-primary-light);
  color: var(--clr-secondary);
  &:hover,
  &:active {
    background-color: var(--clr-primary);
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

function Portfolio({ item }) {
  return (
    <PortfolioStyle>
      <div className="portfolio__img">
        <div className="portfolio__img--head">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="portfolio__img--body">
          <Image fluid={item.frontmatter.image.childImageSharp.fluid} />
        </div>
      </div>
      <div className="portfolio__desc">
        <TertiaryTitle>{item.frontmatter.title}</TertiaryTitle>
        {renderAst(item.htmlAst)}
        <div className="portfolio__footer">
          <Button>Live</Button>
          <Button>Code</Button>
        </div>
      </div>
    </PortfolioStyle>
  )
}

Portfolio.propTypes = {
  item: PropTypes.object,
}

export default Portfolio
