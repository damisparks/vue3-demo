<script setup lang="ts">
import ProfileView from '@/components/ProfileView.vue'
import { useQuery } from 'vue-query'
const route = useRoute()
const id = ref(route.params.id as string)

const fetcher = async (id: number) =>
  await fetch(`${import.meta.env.VITE_API_BASE_URL}/character/${id}`).then(
    (response) => response.json()
  )

const { isLoading, isError, data, error } = useQuery(
  ['profile', id.value],
  () => fetcher(parseInt(id.value))
)
</script>
<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data">
      <ProfileView :user="data" />
    </div>
    <div v-else>Nothing to show</div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
