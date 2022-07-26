import { useEffect, useState } from 'react'
import Loading from '@/components/UI/Loading'
import { getGoods, Profile } from '@/features/goods'
import Toast from '@/lib/toast'
import styles from './HomeGoods.module.scss'
import type { Goods } from '@/features/goods'


export const HomeGoods = (): JSX.Element => {
  const [goods, setGoods] = useState<Goods[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getGoods()
      .then(res => void setGoods(res.data))
      .catch(() => {
        Toast.fail('Error - goods')
        setLoading(false)
      })
  }, [])

  return goods.length !== 0
    ? (
      <div className={styles.goods}>
        {goods.map(item => (
          <div key={item.id} className={styles.itemWrapper}>
            <Profile className={styles.item} item={item} />
          </div>
        ))}
      </div>
    )
    : loading
      ? (
        <Loading
          backgroundColor="transparent"
          className={styles.loading}
          fontSize={40}
          tip="Loading goods..."
        />
      )
      : <div className={styles.failed}>Failed to load goods</div>
}
