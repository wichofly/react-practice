import { useState } from "react"

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  let cities = [
    'San Salvador',
    'San Miguel',
    'Santa Ana',
    'San Antonio',
    'San Francisco'
  ]

  return (
    <>
      <h1>🕺 Cities 🏄‍♂️</h1>
      {cities.length === 0 && <p>No Cities found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => setSelectedIndex(index)}>
            {city}
          </li>
        ))}
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

  - To tell React that the component will have data or a state that might change over time, useState is needed 


*/