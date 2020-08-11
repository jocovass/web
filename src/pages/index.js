import React from 'react'
import Layout from '../components/Layout/Layout'
import Home from '../components/Sections/Home'
import About from '../components/Sections/About'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <div style={{ height: '1000px', background: 'blue' }}></div>
    </Layout>
  )
}

export default App
