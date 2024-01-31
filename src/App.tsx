import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'
import ExtendableText from './components/4-Managing-Component-State/ExtendableText'


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
      <ExtendableText >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio id nulla sint,
        nemo quos? Quo animi, laudantium similique necessitatibus fugit pariatur aut ea! Quod eligendi, obcaecati, quo assumenda ex provident impedit totam soluta corrupti quia repellendus? Officia tenetur molestiae,
        quam voluptatem a quibusdam non maiores fugit aliquid nesciunt aliquam eum odit blanditiis aut atque sapiente, nobis nihil porro voluptatibus dolores. Aliquid minima tenetur, laudantium saepe laboriosam illum facilis modi accusantium,
        maxime iure adipisci vel sed quam eligendi tempore similique ducimus odio? Soluta ipsam fuga molestiae voluptatibus velit quae possimus at aliquid, voluptates consectetur vel tempore veniam voluptatum debitis provident.
      </ExtendableText>

      <ExtendableText >
        Hello Chasse 
      </ExtendableText>
    </div >
  )
}

export default App
