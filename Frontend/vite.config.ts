import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import flexBugFixes from 'postcss-flexbugs-fixes'
import pxToViewport from 'postcss-px-to-viewport'
import writeSvg from 'postcss-write-svg'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
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
          exclude: [/node_modules/]
        }),
        flexBugFixes(),
        writeSvg({
          utf8: false
        })
      ]
    }
  }
})
