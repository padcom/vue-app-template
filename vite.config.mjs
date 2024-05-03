/* eslint-env node */
import { defineVueAppConfig } from '@padcom/vite-config-vue'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'

export default defineVueAppConfig({
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
      ],
    },
  },
})
