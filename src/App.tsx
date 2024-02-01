import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'
import ExpenseList from './components/5-Building-Forms/expense-tracker/components/ExpenseList'
import ExpenseFilter from './components/5-Building-Forms/expense-tracker/components/ExpenseFilter'
import ExpenseForm from './components/5-Building-Forms/expense-tracker/components/ExpenseForm'

import categories from './components/5-Building-Forms/expense-tracker/categories'

const neededThings = [
  {
    id: uuid(),
    description: 'Potato',
    amount: 2,
    category: 'Groceries'
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
    category: 'Entertainment'
  },
  {
    id: uuid(),
    description: 'Shirt',
    amount: 4,
    category: 'Entertainment'
  }
]

// console.log(neededThings);

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState(neededThings)

  if (expenses.length === 0) return null // It Does not show the table when there is not description.

  // const handleSubmit = (expense: { id: any; description: string; amount: number; category: string }) =>
  //   setExpenses([...expenses, { ...expense, id: uuid() }])

  const visibleExpenses = selectedCategory
    ? expenses.filter(exp => exp.category === selectedCategory)
    : expenses

  const handleDelete = (id: any) =>
    setExpenses(expenses.filter(exp => exp.id !== id))

  return (
    <div className="App">
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([
          ...expenses,
          {
            ...expense, id: uuid()
          }])}
        />
      </div>

      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
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
 * 
 */
