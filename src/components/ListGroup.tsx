let cities = [
  'San Salvador',
  'San Miguel',
  'Santa Ana',
  'San Antonio',
  'San Francisco'
]
cities = []

const ListGroup = () => {

  // const getPlaces = () => {
  //   return cities.length === 0 && <p>No Cities</p>
  // }

  const getPlaces = () => cities.length === 0 && <p>No Cities</p> 


  return (
    <>
      <h1>🕺 Cities 🏄‍♂️</h1>
      {getPlaces()}
      <ul className="list-group">
        {cities.map(city => <li key={city}>
          {city}
        </li>)}
      </ul>
    </>
  )
}

export default ListGroup