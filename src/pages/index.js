import React from 'react'
import Layout from '../components/Layout/Layout'
import Home from '../components/Sections/Home'

function App() {
  return (
    <Layout>
      <Home />
      <div style={{ height: '1000px', background: 'blue' }}></div>
    </Layout>
  )
}

export default App
