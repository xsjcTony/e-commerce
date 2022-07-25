import clsx from 'clsx'
import { HomeBanner } from '@/features/banner'
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
        <div>123</div>
      </div>
      <Footer />
    </>
  )
}

export default Home
