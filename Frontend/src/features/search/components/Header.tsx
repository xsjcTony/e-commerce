import { Button, NavBar, SearchBar } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import clsx from 'clsx'
import { memo, useRef } from 'react'
import { useSearch } from '@/features/search'
import styles from './Header.module.scss'
import type { SearchBarRef } from 'antd-mobile/es/components/search-bar'
import type { ReactNode } from 'react'


/**
 * Types
 */
interface HeaderProps {
  navLeft?: ReactNode
  navRight?: ReactNode
}


/**
 * Component
 */
export const Header = ({ navLeft = void 0, navRight = void 0 }: HeaderProps): JSX.Element => {
  const searchRef = useRef<SearchBarRef>(null)

  const { isSearching, startSearching, stopSearching } = useSearch()

  const searchLeft = (
    <LeftOutline
      className={styles.searchNavLeft}
      onClick={() => {
        stopSearching()
        searchRef.current?.clear()
      }}
    />
  )
  const searchRight = <Button color="primary" size="small">Search</Button>


  return (
    <NavBar
      back={null}
      className={clsx(styles.navBar, isSearching && styles.searching)}
      left={isSearching ? searchLeft : navLeft}
      right={isSearching ? searchRight : navRight}
    >
      <SearchBar
        ref={searchRef}
        className={styles.searchBar}
        placeholder="Search for anything"
        onFocus={startSearching}
      />
    </NavBar>
  )
}

export default memo(Header)
