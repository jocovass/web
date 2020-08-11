import React from 'react'
import styled from 'styled-components'
import hero from '../../images/hero2.svg'

const HeroImgStyle = styled.div`
  width: 31rem;
  margin-top: 5rem;
  .hero-img {
    width: 100%;
    height: auto;
  }
`

function HeroImg() {
  return (
    <HeroImgStyle>
      <img className="hero-img" src={hero} alt="" />
    </HeroImgStyle>
  )
}

export default HeroImg
