<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
const colorScheme = localStorage.getItem('vueuse-color-scheme')
useStorage('vueuse-color-scheme', colorScheme ? colorScheme : 'auto')
</script>
<template>
  <RouterView />
</template>
