import React from 'react'
import styled from 'styled-components'
import { Container, SecondaryTitle, Highlight } from '../elements/elements'
import SkillsGroup from '../templates/SkillsGroup'

const AboutStyles = styled.section`
  margin-top: 5rem;
  text-align: center;
  .bio {
    font-size: 1.3rem;
  }
  .skills-wrap {
    width: 100%;
    max-width: 230px;
    margin: 4rem auto 0;
  }
`
const Button = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.9rem 2rem;
  margin: 2rem 0;
  border-radius: 50px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  background-color: var(--clr-primary-light);
  color: var(--clr-secondary);
  &:hover,
  &:active {
    background-color: var(--clr-primary);
  }
`

function About() {
  return (
    <AboutStyles>
      <Container>
        <SecondaryTitle>About me</SecondaryTitle>
        <p className="bio">
          I&rsquo;m a self taught <Highlight>Front-End Developer</Highlight>{' '}
          based in Liverpool, Uk.
          <br />
          I&rsquo;m passionate about technology, my main focus is front-end
          currently, but I&rsquo;m happy to learn new technology always.
        </p>
        <Button>Resume</Button>
        <div className="skills-wrap">
          <SkillsGroup category="languages" />
          <SkillsGroup category="libraries" />
          <SkillsGroup category="tools" />
        </div>
      </Container>
    </AboutStyles>
  )
}

export default About
