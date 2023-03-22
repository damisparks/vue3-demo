<script setup lang="ts">
import ProfileCreator from '@/components/ProfileCreator.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
</script>

<template>
  <div class="max-w-lg mx-auto">
    <AppTitle>Create new hero</AppTitle>
    <ProfileCreator />
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
