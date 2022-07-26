import { get } from '@/lib/request'
import type { Goods } from '@/features/goods'
import type { ResponseData } from '@/lib/request'


export const getGoods = async (): Promise<ResponseData<Goods[]>> => get('/api/v1/goods')
