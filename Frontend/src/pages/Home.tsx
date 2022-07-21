import { Button } from 'antd-mobile'
import { getUser, postUser } from '@/services'


const getUserTest = async (): Promise<void> => {
  const response = await getUser()
  console.log(response)
}

const postUserTest = async (): Promise<void> => {
  const response = await postUser()
  console.log(response)
}

const Home = (): JSX.Element => (
  <div>
    <h1>Home</h1>
    <Button onClick={getUserTest}>getUser</Button>
    <Button onClick={postUserTest}>postUser</Button>
  </div>
)

export default Home
