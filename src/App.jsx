import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Index from './Pages/index'

function App() {
  return (
    <Router>
      <div className={'min-h-screen w-screen'}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
