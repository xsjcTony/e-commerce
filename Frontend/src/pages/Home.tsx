import { Button } from 'antd-mobile'
import { NavLink } from 'react-router-dom'
import useCounter from '@/features/counter'


const Home = (): JSX.Element => {
  const { count, increment, decrement } = useCounter()

  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <NavLink to="/category">Category</NavLink>
    </div>
  )
}

export default Home
