import { atom, useAtom } from 'jotai'


const searchAtom = atom<boolean>(false)


export const useSearch = (): {
  isSearching: boolean
  startSearching: () => void
  stopSearching: () => void
} => {
  const [isSearching, setIsSearching] = useAtom(searchAtom)

  const startSearching = () => void setIsSearching(true)
  const stopSearching = () => void setIsSearching(false)

  return {
    isSearching,
    startSearching,
    stopSearching
  }
}
