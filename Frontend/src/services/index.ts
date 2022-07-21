import { get, post } from '@/lib/request'
import type { ResponseData } from '@/lib/request'


export const getUser = async (): Promise<ResponseData> => get('/api/v1/user')
export const postUser = async (): Promise<ResponseData> => post('/api/v1/user')
