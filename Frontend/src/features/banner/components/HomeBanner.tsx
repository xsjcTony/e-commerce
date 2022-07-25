import { Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import Carousel, { getBanner } from '@/features/banner'
import styles from './HomeBanner.module.scss'
import type { BannerItem } from '@/features/banner'


const ErrorBannerItem: BannerItem = {
  id: 0,
  title: 'N/A',
  description: 'N/A',
  image: '/404',
  url: '',
  type: 1,
  status: 0,
  sort: 0
}


export const HomeBanner = (): JSX.Element => {
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([])

  useEffect(() => {
    getBanner()
      .then(res => void setBannerItems(res.data))
      .catch(() => {
        Toast.show({
          content: 'Error - banner',
          icon: 'fail'
        })
        setBannerItems([ErrorBannerItem])
      })
  }, [])

  return <Carousel bannerItems={bannerItems} className={styles.carousel} />
}
