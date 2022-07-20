import { Button } from 'antd-mobile'
import { NavLink } from 'react-router-dom'
import useCounter from '@/features/counter'


const Category = (): JSX.Element => {
  const { count, increment, decrement } = useCounter()

  return (
    <div>
      <h1>Category</h1>
      <p>{count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default Category
