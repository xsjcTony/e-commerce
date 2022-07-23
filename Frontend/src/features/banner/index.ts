export { default } from './components/Carousel'
export * from './services'


/**
 * Types
 */
export interface BannerItem {
  id: number
  title: string
  description: string
  image: string
  url: string
  type: 0 | 1 // 0: Desktop, 1: Mobile
  status: 0 | 1 // 0: Offline, 1: Online
  sort: number
}
