import { useNavigate } from 'react-router-dom'

import gift1Gif from '../assets/gift1.gif'
import gift2Gif from '../assets/snoop.gif'

function Gifts() {
  const navigate = useNavigate()

  const gifts = [
    {
      id: 1,
      gif: gift1Gif,
      page: '/gift1',
    },
    {
      id: 2,
      gif: gift2Gif,
      page: '/gift2',
    },
  ]

  return (
    <main className="gifts-page">

      <div className="gifts-header">
        <h1>wow gifts!</h1>
        <p>oo unboxing time...</p>
      </div>

      <div className="gifts-container">
        {gifts.map((gift) => (
          <div className="gift-wrapper" key={gift.id}>

            <button
              className="gift-button"
              onClick={() => navigate(gift.page)}
            >
              <img src={gift.gif} alt={`Gift ${gift.id}`} />
            </button>

          </div>
        ))}
      </div>

    </main>
  )
}

export default Gifts
