import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Letter from './pages/Letter'
import Gifts from './pages/Gifts'

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </div>
  )
}

export default App