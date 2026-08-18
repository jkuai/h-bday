import { useEffect } from 'react'
import loadingGif from '../assets/letter.gif'

function Loading({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <img src={loadingGif} alt="Loading..." className="loading-page" />
  )
}

export default Loading