import './App.css'
// import Message from './Message'
// import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {

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

      <Alert>
        <h1>Hello <span>Sol</span> ✈️ </h1>
      </Alert>

      <Button color='primary' onClick={() => console.log('Hola')}>Wake me Up</Button>
      <Button color='dark' onClick={() => console.log('Hola')}>Take me Home</Button>
      <Button onClick={() => console.log('Hola')}>Eat Pupusas</Button>
    </div>
  )
}

export default App
