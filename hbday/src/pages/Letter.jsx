import { useState } from 'react'
import Loading from '../components/loading'

function Letter() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Loading onFinish={() => setLoading(false)} />
  }

  return (
    <main className="letter-page">
      <p>oh!</p>
      <h1>You've received a letter!</h1>
    </main>
  )
}

export default Letter