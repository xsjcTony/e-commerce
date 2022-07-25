import clsx from 'clsx'
import { HomeBanner } from '@/features/banner'
import { HomeMenu } from '@/features/menu/components/HomeMenu'
import { HomeNotification } from '@/features/notification'
import { HomeNavBar, useSearch } from '@/features/search'
import Footer from '@/layouts/Footer'
import styles from './Home.module.scss'


/**
 * Component
 */
const Home = (): JSX.Element => {
  const { isSearching } = useSearch()

  return (
    <>
      <HomeNavBar />
      <div className={clsx(styles.content, isSearching && styles.searching)}>
        <HomeBanner />
        <HomeNotification />
        <HomeMenu />
        <div>123</div>
      </div>
      <Footer />
    </>
  )
}

export default Home
