<script lang="ts" setup>
import { INavItem } from '@/types'

const navlinks: INavItem[] = [
  { name: 'Home', to: 'index' },
  { name: 'Create new', to: 'user-new' },
]

const route = useRoute()
</script>

<template>
  <nav
    class="bg-white shadow z-40 sticky top-0 p-2 rounded-3xl flex items-center justify-center"
  >
    <RouterLink
      v-for="{ name, to } in navlinks"
      :to="{ name: to }"
      :title="name"
      :key="`navlinks-${name}`"
      :class="[
        route.name === to
          ? 'text-gradient font-bold'
          : 'text-slate-700 dark:text-slate-400',
        'px-2 hover:text-slate-900 dark:hover:text-slate-200',
      ]"
    >
      {{ name }}
    </RouterLink>
  </nav>
</template>
