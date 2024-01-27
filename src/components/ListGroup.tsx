const cities = [
  'San Salvador',
  'San Miguel',
  'Santa Ana',
  'San Antonio',
  'San Francisco'
]

const ListGroup = () => {
  return (
    <>
      <h1>🕺 Cities 🏄‍♂️</h1>
      <ul className="list-group">
        {cities.map(city => <li key={city}>
          {city}
        </li>)}
      </ul>
    </>
  )
}

export default ListGroup