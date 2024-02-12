import { useEffect, useState } from "react"

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log('Fetching Products in', category);
    setProducts(['Clothing', 'Household'])
  }, [category])

  return (
    <div>ProductList</div>
  )
}

export default ProductList

/**
 * <string[]> ---> It is used to specify that strings in an array are in.
   The syntax  <string[]>  in TypeScript is used to define an array of strings. 
   In this case, it is used to define the type of the  products  state variable in the React component.

------------------------------------------------------------------------------------------------------------------------

 * Using interface:

  interface Prop {
    category: string
  }

  const ProductList = ({ category }: Prop) => {...

   New way to use it without interface:

   const ProductList = ({ category }: { category: string }) => {  

------------------------------------------------------------------------------------------------------------------------

 * useEffect(() => {
    console.log('Fetching Products in', category);
    setProducts(['Clothing', 'Household'])
  }, [category])

  The second argument to the effect hook is the dependencies Array.
  - In case does not exist an array in the effect hook, react will execute the effect after every render.
  - [] --> An empty array , react will execute our effect only once, the first time our component is render.
  - [category] --> If value is added (props or state variables), react will rerun our effect every time any of these values changes.
 */