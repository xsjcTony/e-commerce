export { default } from './components/Notification'
export * from './services'
export * from './components/HomeNotification'


/**
 * Types
 */
export interface Notification {
  id: number
  title: string
  description: string
  url: string
  type: 0 | 1 // 0: Desktop, 1: Mobile
  status: 0 | 1 // 0: Offline, 1: Online
  sort: number
}
