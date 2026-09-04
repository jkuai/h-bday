import { useNavigate } from 'react-router-dom'

function Gift2() {
  const navigate = useNavigate()

  return (
    <main className="gift-page">

      <button
        className="back-button"
        onClick={() => navigate('/gifts')}
      >
        ← back to gifts
      </button>

      <div className="gift-header">
        <h1>ta da again!</h1>
        <p>i really like the rest of u too</p>
      </div>

      <div className="gift-content">

        <div className="gift-image">
          {/* Put your gift image here */}
          <img src="" alt="Gift 2" />
        </div>

        <div className="gift-text">
          <p>
            Now u can have a little me to bring around with u 😛 
          </p>
        </div>

      </div>

    </main>
  )
}

export default Gift2

