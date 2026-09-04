import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Letter from './pages/Letter'
import Gifts from './pages/Gifts'
import Gift1 from './pages/Gift1' 
import Gift2 from './pages/Gift2' 

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/gift1" element={<Gift1 />} />
          <Route path="/gift2" element={<Gift2 />} />

      </Routes>
    </div>
  )
}

export default App