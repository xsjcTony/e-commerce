export * from './services'
export { default as Profile } from './components/Profile'
export * from './components/HomeGoods'


/**
 * Types
 */
export interface Goods {
  id: number
  name: string
  image: string
  price: number
  sold: number
  description: string
  sort: number
  sellStatus: 0 | 1 // 0: 下架, 1: 上架
  newStatus: 0 | 1 // 0: 不是新品, 1: 新品
  recommendStatus: 0 | 1 // 0: 不推荐, 1: 推荐
  auditStatus: 0 | 1 // 0: 未审核, 1: 审核已通过
}
