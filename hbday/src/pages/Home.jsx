import snoopyGif from '../assets/snoop.gif'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/letter')
  }

  return (
    <main className="home-page">
      <h1>Happy Birthday Harrison!</h1>

      <p>click on snoopy to grab the gift!</p>

      <button className="snoopy-button" onClick={handleClick}>
        <img src={snoopyGif} alt="Snoopy gif" className="snoopy-gif" />
      </button>
    </main>
  )
}

export default Home