import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'
import 'normalize.css'
import '@/assets/css/global.css'
import '@/assets/iconfont/iconfont.css'
import ErrorBoundaryFallback from '@/components/ErrorBoundaryFallback'


const root = document.querySelector('#app')

if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
)
