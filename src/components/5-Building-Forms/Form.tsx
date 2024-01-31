import { FormEvent } from "react"

const Form = () => {

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log('Submitted')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" type="number" className="form-control" />
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