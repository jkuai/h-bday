import { useState } from 'react'

import gift1Gif from '../assets/snoop.gif'
import gift2Gif from '../assets/snoop.gif'
import gift3Gif from '../assets/snoop.gif'

function Gifts() {
  const [openGift, setOpenGift] = useState(null)

  const gifts = [
    {
      id: 1,
      gif: gift1Gif,
      note: 'I love how you build things 😛 from the 3D printed toys and our super cool oishi-maker, ive always admired your creativity when looking for solutions',
    },
    {
      id: 2,
      gif: gift2Gif,
      note: 'I love it when we cook tgt 🍜 its funny how our relationship started with dumplings hehe, and the food we make is always yummy',
    },
    {
      id: 3,
      gif: gift3Gif,
      note: 'stuffy or shirt?',
    },
  ]

  const handleGiftClick = (id) => {
    setOpenGift(openGift === id ? null : id)
  }

  return (
    <main className="gifts-page">

      <div className="gifts-header">
        <h1>wow gifts!</h1>
        <p>some things that I love about you...</p>
      </div>

      <div className="gifts-container">
        {gifts.map((gift) => (
          <div className="gift-wrapper" key={gift.id}>

            <button
              className={`gift-button ${openGift === gift.id ? 'open' : ''}`}
              onClick={() => handleGiftClick(gift.id)}
            >
              <img src={gift.gif} alt={`Gift ${gift.id}`} />
            </button>

            {openGift === gift.id && (
              <div className="gift-note">
                <p>{gift.note}</p>
              </div>
            )}

          </div>
        ))}
      </div>

    </main>
  )
}

export default Gifts