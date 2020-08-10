import React from 'react'
import styled from 'styled-components'

const HeroTextStyle = styled.div`
  margin-top: 7rem;
  text-align: center;

  .title {
    font-size: 4rem;
    margin-bottom: 2rem;
    &--accent {
      color: var(--clr-accent);
    }
    .subtitle {
      display: block;
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
`

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  background-color: var(--clr-primary-light);
  color: var(--clr-secondary);
  &:hover,
  &:active {
    background-color: var(--clr-primary);
  }
`

function HeroText() {
  return (
    <HeroTextStyle>
      <h1 className="title">
        Hi I&rsquo;m <span className="title--accent">Joco</span>
        <span className="subtitle">
          I create high performant,
          <br /> responsive websites.
        </span>
      </h1>
      <Button>Portfolio</Button>
    </HeroTextStyle>
  )
}

export default HeroText
