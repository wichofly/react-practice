import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'
import ExpenseList from './components/5-Building-Forms/expense-tracker/components/ExpenseList'

const neededThings = [
  {
    id: uuid(),
    description: 'Potato',
    amount: 2,
    category: 'Food'
  },
  {
    id: uuid(),
    description: 'fff',
    amount: 1,
    category: 'Utilities'
  },
  {
    id: uuid(),
    description: 'Shoes',
    amount: 2,
    category: 'Sport'
  },
  {
    id: uuid(),
    description: 'Shirt',
    amount: 4,
    category: 'Food'
  }
]

console.log(neededThings);


function App() {
  const [expenses, setExpenses] = useState(neededThings)

  if (expenses.length === 0) return null // It Does not show the table when there is not description.

  const handleDelete = (id: any) => setExpenses(expenses.filter(exp => exp.id !== id))

  return (
    <div className="App">
      <ExpenseList
        expenses={expenses}
        // onDelete={(id) =>
        //   setExpenses(expenses.filter(exp => exp.id !== id))}
        onDelete={handleDelete}
      />
    </div >
  )
}

export default App

/**
 * "id: any" is used because I am using uuid(), it is mixed with numbers and strings.
 */
