<script setup lang="ts">
defineProps<{ nav: { name: string; path: string } }>()

const route = useRoute()
</script>

<template>
  <RouterLink
    :to="{ name: nav.path }"
    :title="nav.name"
    :key="`sidebar-item-${nav.name}`"
    :class="[
      route.name === nav.path
        ? 'font-bold text-main bg-easy-50'
        : 'text-slate-700 dark:text-slate-400',
      'px-2 hover:text-zinc-500 hover:bg-zinc-100 py-[10px] rounded-[4px] w-full block ',
    ]"
  >
    {{ nav.name }}
  </RouterLink>
</template>
