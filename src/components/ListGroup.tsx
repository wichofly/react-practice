let cities = [
  'San Salvador',
  'San Miguel',
  'Santa Ana',
  'San Antonio',
  'San Francisco'
]
cities = []

const ListGroup = () => {
  return (
    <>
      <h1>🕺 Cities 🏄‍♂️</h1>
      {cities.length === 0 && <p>No Cities</p>}
      <ul className="list-group">
        {cities.map(city => <li key={city}>
          {city}
        </li>)}
      </ul>
    </>
  )
}

export default ListGroup