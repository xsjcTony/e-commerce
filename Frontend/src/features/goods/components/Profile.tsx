import { Ellipsis, Image } from 'antd-mobile'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './Profile.module.scss'
import type { Goods } from '@/features/goods'


/**
 * Types
 */
interface ProfileProps {
  item: Goods
  className?: string
}


/**
 * Component
 */
const Profile = ({ item, className = void 0 }: ProfileProps): JSX.Element => {
  const formattedPrice = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD'
  }).format(item.price)
  const priceInteger = /(?<=\$).+(?=\.)/.exec(formattedPrice)?.[0]
  const priceDecimal = /(?<=\.)\d+/.exec(formattedPrice)?.[0]


  return (
    <a className={clsx(styles.item, className)} href={`/item/${item.id}`}>
      <Image
        lazy
        alt={item.description}
        className={styles.image}
        fit="contain"
        src={item.image}
      />
      <div className={styles.info}>
        <Ellipsis className={styles.name} content={item.name} rows={2} />
        <div className={styles.price}>
          <span>
            AU$
            <em className={styles.number}>{priceInteger}</em>
            .
            {priceDecimal}
          </span>
          <span className={styles.sold}>
            {item.sold}
            {' sold'}
          </span>
        </div>
      </div>
    </a>
  )
}

export default memo(Profile)
