/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/promise-function-async */

import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import lazyLoading from './utils/lazyLoading'


/**
 * Lazy loading components
 */
const Home = lazyLoading(lazy(() => import('./pages/Home')))
const Category = lazyLoading(lazy(() => import('./pages/Category')))
const Cart = lazyLoading(lazy(() => import('./pages/Cart')))
const Account = lazyLoading(lazy(() => import('./pages/Account')))

const Page404 = lazyLoading(lazy(() => import('./components/UI/Page404')))


const App = (): JSX.Element => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/category" element={<Category />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/account" element={<Account />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
)


export default App
