import { useState } from 'react'
import Loading from '../components/loading'
import { useNavigate } from 'react-router-dom'

function Letter() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  if (loading) {
    return <Loading onFinish={() => setLoading(false)} />
  }

  return (
    <main className="letter-page">
      <p>oh!</p>
      <h1>You've received a letter!</h1>
            
      <button className="keep-looking-button" onClick={() => navigate('/gifts')}>
        oo what else is there...
      </button>
    </main>
  )
}

export default Letter