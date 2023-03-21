<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'
const { getAllProfilesQuery } = useApiQuery()
const { isLoading, data, isError, error } = getAllProfilesQuery()
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data" class="grid lg:grid-cols-2 gap-6">
      <!-- {{ data.results }} -->
      <div v-for="item in data.results" :key="item.id">
        <ProfileCard :user="item" />
      </div>

      <div class="flex items-center justify-between mb-4">
        <!-- TODO - add pagination -->
        <button class="btn-primary">Previous</button>
        <button class="btn-primary">Next</button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
