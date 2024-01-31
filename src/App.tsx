import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'
import ExtendableText from './components/4-Managing-Component-State/ExtendableText'
import Form from './components/5-Building-Forms/Form'


function App() {
  // const [game, setGame] = useState({
  //   id: uuid(),
  //   player: {
  //     name: 'Tobias'
  //   }
  // })

  // const handleClick = () => {
  //   setGame({
  //     ...game,
  //     player: { ...game.player, name: 'Moises' }
  //   })
  // }

  return (
    <div className="App">
      <Form />
    </div >
  )
}

export default App
