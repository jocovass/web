import React from 'react'
import Layout from '../components/Layout/Layout'
import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Portfolios from '../components/Sections/Portfolios'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Portfolios />
    </Layout>
  )
}

export default App
