import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import categories from '../categories'

const schema = z.object({
  description: z.string().min(5).max(100),
  amount: z
    .number({ invalid_type_error: 'Amount field is required.' })
    .min(0.01)
    .max(100_000), // maximum of $100,000
  category: z.enum(categories)
})

type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register('description')}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && <p className="text-danger" >{errors.description.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register('amount')}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && <p className="text-danger" >{errors.amount.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register('category')}
          id="category"
          className="form-select">
          <option value=""></option>
          {categories.map(category =>
            <option key={category} value={category}>
              {category}
            </option>
          )}
        </select>
        {errors.category && <p className='text-danger'>{errors.category.message}</p>}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ExpenseForm