/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { DotLoading } from 'antd-mobile'
import { memo } from 'react'
import styles from './Loading.module.scss'
import type { ReactNode } from 'react'


/**
 * Types
 */
interface LoadingProps {
  tip?: ReactNode
  fontSize?: number
}


/**
 * Component
 */
const Loading = ({ tip = 'Loading...', fontSize = void 0 }: LoadingProps): JSX.Element => (
  <div className={styles.container} style={{ '--font-size': fontSize ?? 'var(--adm-font-size-main)' }}>
    <DotLoading color="primary" />
    <p>{tip}</p>
  </div>
)

export default memo(Loading)
