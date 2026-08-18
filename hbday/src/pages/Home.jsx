import snoopyGif from '../assets/snoop.gif'

function Home() {
  const handleClick = () => {
    window.location.href = '/Letter'
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