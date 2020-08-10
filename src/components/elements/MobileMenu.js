import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
  background-color: var(--clr-primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
`

function MobileMenu({ children }) {
  return <Wrapper>{children}</Wrapper>
}

MobileMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MobileMenu
