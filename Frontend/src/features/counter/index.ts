import { atom, useAtom } from 'jotai'


export const countAtom = atom<number>(0)


const useCounter = (): {
  count: number
  increment: () => void
  decrement: () => void
} => {
  const [count, setCount] = useAtom(countAtom)

  const increment = () => void setCount(count + 1)
  const decrement = () => void setCount(count - 1)

  return {
    count,
    increment,
    decrement
  }
}

export default useCounter
