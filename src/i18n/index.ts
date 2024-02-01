import { createI18n } from '@padcom/vue-i18n'

import { default as en } from './locales/en'
import { default as pl } from './locales/pl'
import { default as de } from './locales/de'

const messages = {
  en,
  pl,
  de,
}

export default createI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages,
})
