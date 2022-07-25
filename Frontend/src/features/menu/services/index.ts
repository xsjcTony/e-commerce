import { get } from '@/lib/request'
import type { MenuItem } from '@/features/menu'
import type { ResponseData } from '@/lib/request'


export const getMenus = async (): Promise<ResponseData<MenuItem[]>> => get('/api/v1/menus')
