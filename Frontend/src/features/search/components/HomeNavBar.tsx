import { useNavigate } from 'react-router-dom'
import Header from '@/features/search'
import styles from './HomeNavBar.module.scss'


export const HomeNavBar = (): JSX.Element => {
  const navigate = useNavigate()

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

  return <Header navLeft={navLeft} navRight={navRight} />
}
