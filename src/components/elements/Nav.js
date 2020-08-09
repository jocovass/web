import React from 'react'
import styled from 'styled-components'

const NavStyles = styled.nav`
  .nav__list {
    list-style-type: none;
  }
  .nav__link {
    color: var(--clr-secondary);
    font-size: 1.6rem;
    font-weight: 600;
    display: inline-block;
    padding: 0.9rem 2rem;
    margin-bottom: 1rem;

    &:hover,
    &:active {
      color: var(--clr-accent);
    }
  }
`
const navItems = ['Home', 'About', 'Portfolio', 'Contact']

function Nav({ clickHandler }) {
  return (
    <NavStyles>
      <ul className="nav__list">
        {navItems.map(item => {
          return (
            <li className="nav__item" key={item}>
              <a href="/" className="nav__link" onClick={clickHandler}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </NavStyles>
  )
}

export default Nav
