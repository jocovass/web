import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../elements/Header'
import { Container } from '../elements/elements'
import HeroImg from '../elements/HeroImg'
import HeroText from '../elements/HeroText'
import ScrollIndicator from '../elements/ScorllIndicator'

const HomeStyle = styled.section`
  height: 100vh;
  min-height: 600px;
  background-image: linear-gradient(
    -165deg,
    var(--clr-primary-light) 10%,
    var(--clr-secondary) 85%
  );
  position: relative;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

function Home() {
  const homeRef = useRef()
  const headerStyles = useObserver(homeRef)

  return (
    <HomeStyle ref={homeRef}>
      <Header headerStyles={headerStyles} />
      <Container>
        <div className="content">
          <HeroText />
          <HeroImg />
        </div>
        <ScrollIndicator />
      </Container>
    </HomeStyle>
  )
}

// when the scrollY position reaches the and of the Home section we wan't the header to be positioned fixed, so we animete to the view
function useObserver(ref) {
  const [headerStyles, setHeaderStyles] = useState('')
  useEffect(() => {
    let options = {
      rootMargin: '-170px',
    }
    // IntersectionObserver to watch the Home section if it is Intersecting with the viewport and we act accordingly
    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setHeaderStyles('fixed')
          setTimeout(() => {
            setHeaderStyles('fixed fadein')
          }, 50)
        } else {
          setHeaderStyles('')
        }
      })
    }, options)
    observer.observe(ref.current)
    return () => observer.unobserve(ref.current)
  }, [])
  return headerStyles
}

export default Home
