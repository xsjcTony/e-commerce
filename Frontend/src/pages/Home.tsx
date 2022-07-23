import clsx from 'clsx'
import { HomeBanner } from '@/features/banner'
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
      </div>
      <Footer />
    </>
  )
}

export default Home
