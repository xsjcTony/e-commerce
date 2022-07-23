import { Toast } from 'antd-mobile'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel, { getBanner } from '@/features/banner'
import Header, { useSearch } from '@/features/search'
import Footer from '@/layouts/Footer'
import styles from './Home.module.scss'
import type { BannerItem } from '@/features/banner'


/**
 * Component
 */
const Home = (): JSX.Element => {
  const { isSearching } = useSearch()
  const navigate = useNavigate()


  /**
   * Search
   */
  const navLeft = (
    <span
      className={`iconfont icon-menu ${styles.navLeft}`}
      onClick={() => void navigate('/category')}
    />
  )

  const navRight = (
    <span
      className={styles.navRight}
      onClick={() => void navigate('/login')}
    >
      Login
    </span>
  )


  /**
   * Banner
   */
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([])

  useEffect(() => {
    getBanner()
      .then(data => void setBannerItems(data.data))
      .catch(() => void Toast.show({
        content: 'Error - banner',
        icon: 'fail'
      }))
  }, [])


  return (
    <>
      <Header navLeft={navLeft} navRight={navRight} />
      <div className={clsx(styles.content, isSearching && styles.searching)}>
        <Carousel bannerItems={bannerItems} className={styles.carousel} />
      </div>
      <Footer />
    </>
  )
}

export default Home
