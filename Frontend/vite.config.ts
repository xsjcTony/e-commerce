import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import flexBugFixes from 'postcss-flexbugs-fixes'
import pxToViewport from 'postcss-px-to-viewport'
import writeSvg from 'postcss-write-svg'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          jotaiDebugLabel,
          jotaiReactRefresh
        ]
      }
    }),
    tsconfigPaths(),
    eslintPlugin({ formatter: 'stylish' })
  ],
  server: {
    host: true
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
        pxToViewport({
          unitToConvert: 'px',
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          viewportWidth: 750,
          viewportHeight: 1334,
          unitPrecision: 3,
          propList: ['*', '!letter-spacing'],
          selectorBlackList: ['.ignore'],
          minPixelValue: 1,
          mediaQuery: true,
          replace: true,
          landscape: false,
          exclude: [/node_modules/, /iconfont/]
        }),
        flexBugFixes(),
        writeSvg({
          utf8: false
        })
      ]
    },
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
