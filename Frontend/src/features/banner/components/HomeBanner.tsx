import { Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import Carousel, { getBanner } from '@/features/banner'
import styles from './HomeBanner.module.scss'
import type { BannerItem } from '@/features/banner'


export const HomeBanner = (): JSX.Element => {
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([])

  useEffect(() => {
    getBanner()
      .then(data => void setBannerItems(data.data))
      .catch(() => void Toast.show({
        content: 'Error - banner',
        icon: 'fail'
      }))
  }, [])

  return <Carousel bannerItems={bannerItems} className={styles.carousel} />
}
