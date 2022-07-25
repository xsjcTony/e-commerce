import { Skeleton, Swiper } from 'antd-mobile'
import { SoundOutline } from 'antd-mobile-icons'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './Notification.module.scss'
import type { Notification as NotificationType } from '@/features/notification'


/**
 * Types
 */
interface NotificationProps {
  notifications: NotificationType[]
  className?: string
}


/**
 * Component
 */
const Notification = ({ notifications, className = void 0 }: NotificationProps): JSX.Element => (
  <div className={clsx(styles.notification, className)}>
    <SoundOutline className={styles.icon} />
    {notifications.length !== 0
      ? (
        <Swiper
          autoplay
          loop
          allowTouchMove={false}
          autoplayInterval={5000}
          className={styles.carousel}
          direction="vertical"
          indicator={() => null}
        >
          {notifications.map(item => (
            <Swiper.Item key={item.id}>
              <a
                className={styles.link}
                href={item.url ? item.url : void 0}
                rel="noreferrer noopener"
                target="_blank"
              >
                {item.title}
              </a>
            </Swiper.Item>
          ))}
        </Swiper>
      )
      : <Skeleton animated className={styles.skeleton} />}
  </div>
)

export default memo(Notification)
