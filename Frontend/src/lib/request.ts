/**
 * Encapsulation of umi-request
 */

import { extend } from 'umi-request'


/**
 * Types
 */
export interface ResponseData<T = unknown, U = string> {
  code: number
  msg: U
  data: T
}


const devBaseUrl = 'http://127.0.0.1:3001'
const prodBaseUrl = '' // TODO: Fill in production base URL

export const baseUrl = process.env.NODE_ENV === 'production' ? prodBaseUrl : devBaseUrl


const request = extend({
  credentials: 'include', // cross-origin Cookie
  prefix: baseUrl,
  timeout: 10000
})


request.interceptors.request.use((url, options) => {
  return {
    options: {
      ...options,
      headers: {
        ...options.headers,
        Authorization: localStorage.getItem('token') ?? ''
      }
    }
  }
})

export const get = async <T = any>(url: string, data = {}): Promise<T> => request.get<T>(url, {
  params: data
})

export const post = async <T = any>(url: string, data = {}): Promise<T> => request.post<T>(url, { data })

export const deleteRequest = async <T = any>(url: string, data = {}): Promise<T> => request.delete<T>(url, {
  params: data
})

export const put = async <T = any>(url: string, data = {}): Promise<T> => request.put<T>(url, { data })

export const all = async <T = any>(requests: Iterable<Promise<T>>): Promise<Awaited<T>[]> => Promise.all(requests)

export const getFile = async <T = any>(path: string, data = {}): Promise<T> => request.get<T>(path, {
  params: data,
  responseType: 'blob'
})
