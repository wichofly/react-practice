import { FormEvent, useRef, useState } from "react"
import { parse } from "uuid"

const Form = () => {
  const [person, setPerson] = useState({
    name: '',
    age: ''
  })

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()

    console.log(person);
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input onChange={(evt) =>
          setPerson({ ...person, name: evt.target.value })
        }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input onChange={(evt) =>
          setPerson({ ...person, age: parseInt(evt.target.value) })
        }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form

/**
 * This website is so useful as well:
 * https://www.react-hook-form.com/get-started/
 */