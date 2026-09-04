import { useNavigate } from 'react-router-dom'

function Gift1() {
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
        <h1>ta da!</h1>
        <p>i really like ur butt</p>
      </div>

      <div className="gift-content">

        <div className="gift-image">
          {/* Put your gift image here */}
          <img src="" alt="Gift 1" />
        </div>

        <div className="gift-text">
          <p>
            Going with you guys that day to drmers and trying on pants for ur sisters was so funny -
            seeing you put so much thought into her gift made me like u more
          </p>
        </div>

      </div>

    </main>
  )
}

export default Gift1

