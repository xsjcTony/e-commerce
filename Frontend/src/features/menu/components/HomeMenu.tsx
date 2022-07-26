import { useEffect, useState } from 'react'
import Menu, { getMenus } from '@/features/menu'
import Toast from '@/lib/toast'
import styles from './HomeMenu.module.scss'
import type { MenuItem } from '@/features/menu'


const errorMenu: MenuItem[] = new Array(8).fill(void 0).map((_, index) => {
  return {
    id: index,
    title: 'N/A',
    description: 'N/A',
    image: '/404',
    url: '',
    type: 1,
    status: 0,
    sort: 0
  }
})


/**
 * Component
 */
export const HomeMenu = (): JSX.Element => {
  const [menus, setMenus] = useState<MenuItem[]>([])

  useEffect(() => {
    getMenus()
      .then(res => void setMenus(res.data))
      .catch(() => {
        Toast.fail('Error - menu')
        setMenus(errorMenu)
      })
  }, [])

  return <Menu className={styles.menu} menus={menus} />
}
