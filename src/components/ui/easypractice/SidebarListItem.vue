<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'

interface INavItem {
  name: string
  path: string
}

const navItem: INavItem[] = [
  { name: 'Appointments', path: 'easypractice-appointments' },
  { name: 'Notications', path: 'easypractice-notifications' },
  { name: 'Invoices', path: 'easypractice-invoices' },
]
</script>
<template>
  <div class="px-2 space-y-3 border">
    <div v-for="item in navItem" :key="item.path">
      <SidebarItem :nav="item" />
    </div>
  </div>
</template>
