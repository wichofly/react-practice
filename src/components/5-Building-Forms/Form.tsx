import { FormEvent, useRef, useState } from "react"
import { parse } from "uuid"
import { FieldValues, useForm } from 'react-hook-form'

interface FormData {
  name: string
  age: number
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          {...register('name', { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === 'required' && <p className="text-danger" >The name field is required.</p>}
        {errors.name?.type === 'minLength' && <p className="text-warning">You need more than 3 Charters.</p>}

      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          {...register('age')}
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
    https://www.react-hook-form.com/get-started/
 
 * react-hook-form
    We can use the popular library, it quickly build forms with less code.

 * {errors.name?.type === 'required' && <p>The name field is required.</p>}
    "? and . " is called optional chaining on JS. 
    We need the question mark because the error object can be empty.

 * FormData:
    Represents the shape of the form. With this when we type errors and delete th dot,
    we can see our input fields in the auto completion box.
*/