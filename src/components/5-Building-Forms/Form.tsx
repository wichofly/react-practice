import { FormEvent, useRef, useState } from "react"
import { parse } from "uuid"
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3, { message: '3 Characters at least!' }),
  age: z
    .number({ invalid_type_error: 'Age field is required.' })
    .min(18, { message: 'Age must be at least 18' })
})

type FormData = z.infer<typeof schema>

// interface FormData {
//   name: string
//   age: number
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          // {...register('name', { required: true, minLength: 3 })}
          {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger" >{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          {...register('age', { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger" >{errors.age.message}</p>}
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

* Zod:
    It is a library that helps us to validate our form.
    We can use it to validate the form data.

* <input
   {...register('age', { valueAsNumber: true })}
   Gives a good message when the number is less than 18 --> "Number must be greater than or equal to 18"
   Without number gives --> "Expected number, received nan "

   const schema = z.object({
    name: z.string().min(3, { message: '3 Characters at least!' }),
    age: z.number({invalid_type_error:'Age field is required.'}).min(18)
  })
    Show what the user sees when pressing the Submit button without information. 

*/