import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'


function App() {
  const [game, setGame] = useState({
    id: uuid(),
    player: {
      name: 'Tobias'
    }
  })

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: 'Moises' }
    })
  }

  return (
    <div className="App">
      <button onClick={handleClick}>New Gamer</button>
    </div >
  )
}

export default App
