
interface Prop {
  onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({ onSelectCategory }: Prop) => {
  return (
    <select className="form-select" onChange={(evt) => onSelectCategory(evt.target.value)}>
      <option value="" >All Categories</option>
      <option value="Groceries" >Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default ExpenseFilter

/**
 * The purpose of  evt.target.value  
    is to capture the selected value from the dropdown menu and pass it to the  onSelectCategory  function. 
    This allows you to perform further actions or update the state based on the selected value.
    Always is used in "onChange"
 */