import { Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import Notification, { getNotification } from '@/features/notification'
import styles from './HomeNotification.module.scss'
import type { Notification as NotificationType } from '@/features/notification'


const ErrorNotificationItem: NotificationType = {
  id: 0,
  title: 'N/A',
  description: 'N/A',
  url: '',
  type: 1,
  status: 0,
  sort: 0
}


export const HomeNotification = (): JSX.Element => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])

  useEffect(() => {
    getNotification()
      .then(res => void setNotifications(res.data))
      .catch(() => {
        Toast.show({
          content: 'Error - notification',
          icon: 'fail'
        })
        setNotifications([ErrorNotificationItem])
      })
  }, [])

  return <Notification className={styles.notification} notifications={notifications} />
}
