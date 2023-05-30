<script setup lang="ts">
interface INavItem {
  name: string
  path: string
}

const navItem: INavItem[] = [
  { name: 'Appointments', path: 'appointments' },
  { name: 'Notications', path: 'notifications' },
  { name: 'Invoices', path: 'invoices' },
]
</script>
<template>
  <div class="px-6">
    <div v-for="item in navItem" :key="item.path">
      {{ item.name }}
    </div>
  </div>
</template>
