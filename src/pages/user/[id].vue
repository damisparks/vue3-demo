<script setup lang="ts">
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
      <h1>{{ data }}</h1>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
