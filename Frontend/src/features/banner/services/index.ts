import { get } from '@/lib/request'
import type { BannerItem } from '../types'
import type { ResponseData } from '@/lib/request'


export const getBanner = async (): Promise<ResponseData<BannerItem[]>> => get('/api/v1/banner')
