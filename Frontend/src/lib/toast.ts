import { Toast as AdmToast } from 'antd-mobile'
import type { ToastHandler } from 'antd-mobile/es/components/toast'
import type { ReactNode } from 'react'


/**
 * Types
 */
interface ToastType {
  success: (content?: ReactNode, duration?: number) => ToastHandler
  fail: (content?: ReactNode, duration?: number) => ToastHandler
  loading: (content?: ReactNode, duration?: number) => ToastHandler
  show: typeof AdmToast.show
}


const Toast: ToastType = {
  success: (content, duration) => AdmToast.show({ content, duration, icon: 'success' }),
  fail: (content, duration) => AdmToast.show({ content, duration, icon: 'fail' }),
  loading: (content, duration) => AdmToast.show({ content, duration, icon: 'loading' }),
  show: AdmToast.show
}

export default Toast
