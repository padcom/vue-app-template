/* eslint-env node */
import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import i18n from '@padcom/vite-plugin-vue-i18n'
import eslint from 'vite-plugin-eslint'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  define: {
    // set to false if you don't use Vue's options API to shave ~4.5kb off your final bundle
    __VUE_OPTIONS_API__: true,
  },
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
    i18n({
      runtimeOnly: false,
      include: fileURLToPath(new URL('./src/i18n/locales/**', import.meta.url)),
    }),
    eslint({
      lintOnStart: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
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
    setupFiles: [
      './vitest.setup.js',
    ],
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
    },
  },
})
