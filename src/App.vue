<template>
  <HelloWorld :message="$t('title')" />
  <p class="note">{{ t('Now, delete me and get to work!') }}</p>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import HelloWorld from './components/HelloWorld.vue'

// $t() - use application translation (src/i18n/locales/*.ts)
// t()  - use local or application translation if local translation does not exist
const { t } = useI18n()
</script>

<i18n>
{
  "pl": {
    "Now, delete me and get to work!": "A teraz mnie usuń i zabieraj się do roboty!"
  },
  "de": {
    "Now, delete me and get to work!": "Jetzt entferne mich und mach dich an die Arbeit!"
  }
}
</i18n>

<style lang="postcss" scoped>
.note {
  @apply mt-10;
}
</style>
