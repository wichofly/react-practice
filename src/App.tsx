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

      <Button text='Funny 🚀' />
    </div>
  )
}

export default App
