<script setup lang="ts">
import AppNav from '../components/ui/AppNav.vue'
</script>
<template>
  <div class="flex flex-col">
    <AppNav class="max-w-md mx-auto sticky top-4 z-10 bg-white mt-2" />
    <main>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>
