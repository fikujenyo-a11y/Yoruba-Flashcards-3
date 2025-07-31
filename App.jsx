import { useState } from 'react'

const vocabData = [
  {
    day: 1,
    cards: [
      {
        yoruba: "Báwo ni",
        english: "How are you?",
        audio: "https://example.com/audio/bawo_ni.mp3",
        context: "Used as a greeting to ask about someone's well-being.",
        notes: "Common informal greeting, literally 'how is it?'",
        practice: "How would you respond to 'Báwo ni'?"
      },
      {
        yoruba: "Ẹ káàárọ̀",
        english: "Good morning",
        audio: "https://example.com/audio/ekaaaro.mp3",
        context: "Used in the morning hours to greet elders or peers.",
        notes: "Note the 'ẹ' prefix for politeness.",
        practice: "Say 'Ẹ káàárọ̀' aloud three times."
      }
    ]
  }
];

export default function App() {
  const [day, setDay] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [showEnglish, setShowEnglish] = useState(false)

  const card = vocabData[day].cards[cardIndex]

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🌍 Yoruba Flashcards</h1>
      <div style={{ margin: '1rem 0' }}>
        {vocabData.map((_, i) => (
          <button
            key={i}
            style={{ margin: '0.25rem', padding: '0.5rem 1rem', background: i === day ? '#444' : '#ccc', color: 'white', border: 'none', borderRadius: '4px' }}
            onClick={() => { setDay(i); setCardIndex(0); setShowEnglish(false); }}
          >
            Day {i + 1}
          </button>
        ))}
      </div>

      <div style={{ backgroundColor: '#ffe4e6', padding: '1rem', borderRadius: '1rem', margin: '1rem auto', maxWidth: '500px' }}>
        <h2>{card.yoruba}</h2>
        <button onClick={() => setShowEnglish(!showEnglish)}>
          {showEnglish ? card.english : 'Click to show English'}
        </button>
      </div>

      <audio controls>
        <source src={card.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
        <p><strong>Cultural Context:</strong> {card.context}</p>
        <p><strong>Grammar Notes:</strong> {card.notes}</p>
        <p><strong>Practice:</strong> {card.practice}</p>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => { if (cardIndex > 0) setCardIndex(cardIndex - 1); setShowEnglish(false); }}>⬅️ Previous</button>
        <button style={{ margin: '0 1rem' }} onClick={() => new Audio(card.audio).play()}>🔊 Listen</button>
        <button onClick={() => { if (cardIndex < vocabData[day].cards.length - 1) setCardIndex(cardIndex + 1); setShowEnglish(false); }}>Next ➡️</button>
      </div>
    </div>
  )
}
