<script lang="ts" setup>
import { INavItem } from '@/types'
import ColorModeSwitch from '../ColorModeSwitch.vue'
const navlinks: INavItem[] = [
  { name: 'Home', path: 'index' },
  { name: 'Create new', path: 'user-new' },
  { name: 'Favourites', path: 'user-favourites' },
  { name: 'EasyPractice', path: 'easypractice-appointments' },
  { name: 'Rotating Position', path: 'rotating-position' },
]

const route = useRoute()
</script>

<template>
  <nav
    class="bg-white shadow z-40 sticky top-0 p-2 rounded-3xl flex items-center justify-center dark:bg-zinc-800/50 backdrop-blur-lg"
  >
    <RouterLink
      v-for="{ name, path: to } in navlinks"
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
    <ColorModeSwitch />
  </nav>
</template>
