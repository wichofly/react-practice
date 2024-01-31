import { FormEvent, useRef } from "react"
import { parse } from "uuid"

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const person = { name: '', age: 0 }


  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault()

    if (nameRef.current !== null)
      person.name = nameRef.current.value

    if (ageRef.current !== null)
      person.age = parseInt(ageRef.current.value) // parseInt() convert a string to number

    console.log(person);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
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