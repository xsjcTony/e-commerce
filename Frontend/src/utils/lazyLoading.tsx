/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */


import { Suspense } from 'react'
import Loading from '../components/UI/Loading'
import type { LazyExoticComponent } from 'react'


// eslint-disable-next-line react/display-name
const lazyLoading = <P extends object = {}>(LazyComponent: LazyExoticComponent<any>) => (props: P): JSX.Element => (
  <Suspense fallback={<Loading />}>
    <LazyComponent {...props} />
  </Suspense>
)

export default lazyLoading
