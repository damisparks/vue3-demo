<script setup lang="ts">
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/vue/20/solid'
const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
  },
})

const { state, next } = useCycleList(['dark', 'light', 'auto'], {
  initialValue: mode,
})
</script>

<template>
  <button
    aria-label="Color Mode"
    class="border rounded-full px-2 py-2 text-zinc-500 border-zinc-500 hover:bg-white hover:text-zinc-900 hover:border-zinc-900 active:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75"
    @click="next()"
  >
    <template v-if="state === 'dark'">
      <SunIcon name="dark-mode" class="w-4 h-4" />
      <span class="sr-only">Dark Mode</span>
    </template>
    <template v-if="state === 'light'">
      <MoonIcon name="light-mode" class="w-4 h-4" />
      <span class="sr-only">Light Mode</span>
    </template>
    <template v-if="state === 'auto'">
      <ComputerDesktopIcon name="computer-desktop" class="w-4 h-4" />
      <span class="sr-only">Light Mode</span>
    </template>
  </button>
</template>
