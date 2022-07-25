import { Grid, Image, Skeleton } from 'antd-mobile'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './Menu.module.scss'
import type { MenuItem } from '@/features/menu'


/**
 * Types
 */
interface MenuProps {
  menus: MenuItem[]
  className?: string
}


const skeletonMenuItemWithKey = (key: number): JSX.Element => (
  <Grid.Item key={key}>
    <div className={styles.menuItem}>
      <Skeleton animated className={styles.icon} />
      <Skeleton animated className={clsx(styles.title, styles.skeleton)} />
    </div>
  </Grid.Item>
)


/**
 * Component
 */
const Menu = ({ menus, className = void 0 }: MenuProps): JSX.Element => (
  <Grid className={clsx(styles.grid, className)} columns={4}>
    {menus.length !== 0
      ? menus.map(item => (
        <Grid.Item key={item.id}>
          <a className={styles.menuItem} href={item.url ? item.url : void 0}>
            <Image alt={item.description} className={styles.icon} src={item.image} />
            <span className={styles.title}>{item.title}</span>
          </a>
        </Grid.Item>
      ))
      : new Array(8).fill(void 0).map((_, index) => skeletonMenuItemWithKey(index))}
  </Grid>
)

export default memo(Menu)
