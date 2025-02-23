import { get } from '@/lib/request'
import type { BannerItem } from '@/features/banner'
import type { ResponseData } from '@/lib/request'


export const getBanners = async (): Promise<ResponseData<BannerItem[]>> => get('/api/v1/banners')
