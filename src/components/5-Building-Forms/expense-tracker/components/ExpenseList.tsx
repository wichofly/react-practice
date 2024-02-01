interface Expense {
  id: any
  description: string
  amount: number
  category: string
}

interface Prop {
  expenses: Expense[] // It is an array of Expense Object.
  onDelete: (id: any) => void
}

const ExpenseList = ({ expenses, onDelete }: Prop) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, description, amount, category }) =>
          <tr key={id}>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ExpenseList

/**
 * destructuring assignment  { id, description, amount, category } = expense  
    Is done within the  map  function's callback. It extracts the specific properties from each  expense  object in the  expenses  array.
 */