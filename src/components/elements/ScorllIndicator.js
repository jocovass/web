import React from 'react'
import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
    0% {
        transform: translateY(8px);
        opacity: 0;
    }
    30% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(1px);
    }
`

const Wrapper = styled.div`
  width: 17px;
  height: 25px;
  border: 2px solid var(--clr-primary-light);
  border-radius: 50px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;

  .wheel {
    display: block;
    width: 3px;
    height: 6px;
    border-radius: 45%;
    background-color: var(--clr-primary-light);
    animation: 1.5s ${scroll} ease-in-out infinite;
  }
`

function ScrollIndicator() {
  return (
    <Wrapper>
      <span className="wheel"></span>
    </Wrapper>
  )
}

export default ScrollIndicator
