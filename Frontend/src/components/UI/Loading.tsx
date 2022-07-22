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
const Loading = ({ tip = 'Loading...', fontSize = undefined }: LoadingProps): JSX.Element => (
  <div className={styles.container} style={{ fontSize }}>
    <DotLoading color="primary" />
    <p>{tip}</p>
  </div>
)

export default memo(Loading)
