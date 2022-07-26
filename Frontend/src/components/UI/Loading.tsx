/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { DotLoading } from 'antd-mobile'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './Loading.module.scss'
import type { Property } from 'csstype'
import type { ReactNode } from 'react'


/**
 * Types
 */
interface LoadingProps {
  tip?: ReactNode
  fontSize?: number
  backgroundColor?: Property.BackgroundColor
  className?: string
}


/**
 * Component
 */
const Loading = ({
  tip = void 0,
  fontSize = void 0,
  backgroundColor = void 0,
  className = void 0
}: LoadingProps): JSX.Element => (
  <div
    className={clsx(styles.container, className)}
    style={{
      '--font-size': fontSize ?? 'var(--adm-font-size-main)',
      '--background-color': backgroundColor ?? 'rgba(255, 255, 255, .5)'
    }}
  >
    <DotLoading color="primary" />
    {tip ? <p>{tip}</p> : void 0}
  </div>
)

export default memo(Loading)
