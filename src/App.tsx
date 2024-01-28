import { useState } from 'react'
import './App.css'
// import Message from './Message'
// import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button/Button'

function App() {
  const [alertVisible, setAlertVisible] = useState(false)

  // let cities = [
  //   'San Salvador',
  //   'San Miguel',
  //   'Santa Ana',
  //   'San Antonio',
  //   'San Francisco'
  // ]

  // const handleSelectItem = (city: string) => console.log(city)

  return (
    <div className="App">
      {/* <Message />
      <ListGroup cities={cities} heading='Cities' onSelectItem={handleSelectItem} /> */}

      {
        alertVisible &&
        <Alert onClose={() => setAlertVisible(false)}>
          <h1>Hello <span>Sol</span> ✈️ </h1>
        </Alert>
      }

      <Button color='primary' onClick={() => setAlertVisible(true)}>Wake me Up</Button>
      <Button onClick={() => setAlertVisible(true)}>Eat Pupusas</Button>
    </div >
  )
}

export default App
