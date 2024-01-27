import { MouseEvent } from "react"

let cities = [
  'San Salvador',
  'San Miguel',
  'Santa Ana',
  'San Antonio',
  'San Francisco'
]

const ListGroup = () => {

  const handleClick = (evt: MouseEvent) => console.log(evt.target)

  return (
    <>
      <h1>🕺 Cities 🏄‍♂️</h1>
      {cities.length === 0 && <p>No Cities found</p>}
      <ul className="list-group">
        {cities.map(city => <li key={city} className="list-group-item" onClick={handleClick}>
          {city}
        </li>)}
      </ul>
    </>
  )
}

export default ListGroup

/*
  - MouseEvent 
    Helps use to use all the option we have to use the handleClick.
    Outside of the JSX, using the arrow function, the evt has an error, it can not recognize the type of the parameter. is it a number, string or boolean?.
    MouseEvent helps to show the properties using Type annotation in TypeScript. This option is one of the beauties of TypeScript.
      - We get Auto-Completion
      - We get type safety
      - it is easier to refactor or restructure our code 
      
  ----------------------------------------------------------------------------------------------------------------------------------------------------------



*/