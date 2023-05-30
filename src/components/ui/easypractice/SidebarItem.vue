<script setup lang="ts">
defineProps<{ nav: { name: string; path: string } }>()
</script>

<template>
  <span>
    <RouterLink
      :to="{ name: nav.path }"
      :title="nav.name"
      :key="`sidebar-item-${nav.name}`"
    >
      {{ nav.name }}
    </RouterLink>
  </span>
</template>
