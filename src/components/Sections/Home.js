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
  position: relative;
  overflow: hidden;
  .gradient-bg {
    background-image: linear-gradient(
      to bottom,
      var(--clr-primary-light),
      var(--clr-secondary)
    );
    position: absolute;
    top: -15%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skewY(5deg);
    z-index: -1;
  }
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
      <div className="gradient-bg"></div>
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
