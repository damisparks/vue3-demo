<script setup lang="ts">
import { INoticeType } from '@/types'

const props = defineProps<{ hint: string; variant?: INoticeType }>()

const hintColor = computed(() => {
  if (props.variant === 'none') {
    return 'text-gray-600'
  }
  if (props.variant === 'info') {
    return 'text-info'
  }
  if (props.variant === 'error') {
    return 'text-error'
  }
})
</script>
<template>
  <p class="text-sm mt-1" :class="hintColor">
    <slot>{{ hint }}</slot>
  </p>
</template>
