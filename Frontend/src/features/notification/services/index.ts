import { get } from '@/lib/request'
import type { Notification } from '@/features/notification'
import type { ResponseData } from '@/lib/request'


export const getNotifications = async (): Promise<ResponseData<Notification[]>> => get('/api/v1/notifications')
