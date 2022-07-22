import { TabBar } from 'antd-mobile'
import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Footer.module.scss'
import type { TabBarItemProps } from 'antd-mobile/es/components/tab-bar'
import type { Key } from 'react'


const tabs: (TabBarItemProps & { key: Key })[] = [
  {
    key: '/',
    title: 'Home',
    icon: <span className="iconfont icon-A_round" style={{ fontSize: 28 }} />
  },
  {
    key: '/category',
    title: 'Category',
    icon: active => <span className={`iconfont ${active ? 'icon-appstore1' : 'icon-appstore'}`} style={{ fontSize: 22 }} />
  },
  {
    key: '/cart',
    title: 'Cart',
    icon: active => <span className={`iconfont ${active ? 'icon-cartfill' : 'icon-cart'}`} style={{ fontSize: 24 }} />
  },
  {
    key: '/account',
    title: 'Me',
    icon: active => <span className={`iconfont ${active ? 'icon-user' : 'icon-User'}`} style={{ fontSize: 22 }} />
  }
]

const Footer = (): JSX.Element => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <TabBar
      activeKey={pathname}
      className={styles.tabBar}
      onChange={key => void navigate(key)}
    >
      {tabs.map(tab => (
        <TabBar.Item
          key={tab.key}
          badge={tab.badge}
          icon={tab.icon}
          title={tab.title}
        />
      ))}
    </TabBar>
  )
}

export default memo(Footer)
