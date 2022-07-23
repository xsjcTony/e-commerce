import { Button, NavBar, SearchBar } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import clsx from 'clsx'
import { memo } from 'react'
import { useSearch } from '@/features/search'
import styles from './Header.module.scss'
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
const Header = ({ navLeft = undefined, navRight = undefined }: HeaderProps): JSX.Element => {
  const { isSearching, startSearching, stopSearching } = useSearch()

  const searchLeft = <LeftOutline className={styles.searchNavLeft} onClick={stopSearching} />
  const searchRight = <Button color="primary" size="small">Search</Button>


  return (
    <NavBar
      back={null}
      className={clsx(styles.navBar, isSearching && styles.searching)}
      left={isSearching ? searchLeft : navLeft}
      right={isSearching ? searchRight : navRight}
    >
      <SearchBar
        className={styles.searchBar}
        placeholder="Search for anything"
        onFocus={startSearching}
      />
    </NavBar>
  )
}

export default memo(Header)
