import { useEffect, useState } from 'react'
import Carousel, { getBanners } from '@/features/banner'
import Toast from '@/lib/toast'
import styles from './HomeBanner.module.scss'
import type { BannerItem } from '@/features/banner'


const errorBannerItem: BannerItem = {
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
    getBanners()
      .then(res => void setBannerItems(res.data))
      .catch(() => {
        Toast.fail('Error - banner')
        setBannerItems([errorBannerItem])
      })
  }, [])

  return <Carousel bannerItems={bannerItems} className={styles.carousel} />
}
