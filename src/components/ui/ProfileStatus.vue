<script setup lang="ts">
import { IProfileStatusType } from '@/types'

const props = defineProps<{ userStatus: IProfileStatusType }>()

const statusClass = computed(() => {
  if (props.userStatus === 'Alive') {
    return 'bg-green-300'
  }
  if (props.userStatus === 'Dead') {
    return 'bg-amber-300'
  } else return 'bg-gray-300'
})
</script>
<template>
  <span
    :class="statusClass"
    class="h-4 w-4 inline-flex items-center rounded-full"
  ></span>
</template>
