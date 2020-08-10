import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyles from '../Styles/GlobalStyles'
import theme from '../Styles/theme'

function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
