/* eslint-env node */
import { defineConfig } from 'vite'

import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import eslint from 'vite-plugin-eslint'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
  plugins: [
    svg({
      defaultImport: 'component',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    i18n(),
    eslint({
      lintOnStart: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
    },
  },
})
