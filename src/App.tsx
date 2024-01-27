import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'

function App() {
  
  let cities = [
    'San Salvador',
    'San Miguel',
    'Santa Ana',
    'San Antonio',
    'San Francisco'
  ]

  return (
    <div className="App">
      <Message />
      <ListGroup cities={cities} heading='Cities' />
    </div>
  )
}

export default App
