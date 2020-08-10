import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HamburgerContainer = styled.div`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  span {
    display: block;
    height: 3px;
    width: 2.6rem;
    border-radius: 5px;
    position: relative;
    background-color: ${({ menuOpen }) =>
      menuOpen ? 'transparent' : 'var(--clr-secondary)'};
    transform: ${({ menuOpen }) =>
      menuOpen ? 'translateX(-20px)' : 'translateX(0px)'};
    pointer-events: ${({ menuOpen }) => (menuOpen ? 'none' : 'auto')};
    transition: all 0.3s ease-in-out;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--clr-secondary);
      border-radius: 5px;
      transition: transform 0.3s ease-in-out;
    }

    &::before {
      transform: ${({ menuOpen }) =>
        menuOpen
          ? 'translate(20px, 0px) rotate(45deg)'
          : 'translate(0px, -7px) rotate(0deg)'};
    }

    &::after {
      transform: ${({ menuOpen }) =>
        menuOpen
          ? 'translate(20px, 0px) rotate(-45deg)'
          : 'translate(0px, 7px) rotate(0deg)'};
    }
  }
`

function HamburgerButton({ menuOpen, clickHandler }) {
  return (
    <HamburgerContainer
      menuOpen={menuOpen}
      onClick={clickHandler}
      aria-label="Open the menu"
    >
      <span aria-hidden="true" className="bar"></span>
    </HamburgerContainer>
  )
}

HamburgerButton.propTypes = {
  menuOprn: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export default HamburgerButton
