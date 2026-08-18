import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Letter from './pages/Letter'
import Gifts from './pages/Gifts'

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/h-bday/" element={<Home />} />
          <Route path="/Letter" element={<Letter />} />
          <Route path="/Gifts" element={<Gifts />} />
      </Routes>
    </div>
  )
}

export default App