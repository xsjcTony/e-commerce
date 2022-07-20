/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { DotLoading } from 'antd-mobile'
import { memo } from 'react'
import styled from 'styled-components'
import type { ReactNode } from 'react'


interface LoadingProps {
  tip?: ReactNode
  fontSize?: number
}


const LoadingContainer = styled.div<{ fontSize?: number }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    background: rgba(255, 255, 255, .5);
    ${props => props.fontSize && `font-size: ${props.fontSize}px;`}
    color: var(--adm-color-primary);
`


const Loading = ({ tip = undefined, fontSize = undefined }: LoadingProps): JSX.Element => (
  <LoadingContainer fontSize={fontSize}>
    <DotLoading color="primary" />
    <p>{tip}</p>
  </LoadingContainer>
)

export default memo(Loading)
