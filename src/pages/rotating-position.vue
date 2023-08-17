<script setup lang="ts">
import client from '@/services/apiClient'
import { watchDebounced } from '@vueuse/core'
const searchTerm = ref('')
const albumList = ref<string[]>(['A', 'B', 'C', 'D', 'E'])
const searchResults = ref<string[]>([])
const rotationInterval = ref<NodeJS.Timeout | null>(null)
const rotationCount = ref(0)
const ROTATION_SPEED = 1000
const WAIT_BEFORE_SEARCH = 1000
const MAX_WAIT_BEFORE_SEARCH = 5000

// search function
const search = async () => {
  if (!searchTerm.value) return
  try {
    const { data } = await client.getAllAlbums(searchTerm.value)
    const firstFiveDocs: string[] = [...data.results]
      .slice(0, 5)
      .map((doc: any) => doc.collectionName)
      .sort((a: string, b: string) => a.localeCompare(b))
    searchResults.value = firstFiveDocs
  } catch (error) {
    console.error('Error fetching data', error)
  }
}

// handle search
const handleSearch = async () => {
  searchResults.value = []
  await search()
}

const rotatedList = computed(() => {
  const rotated = [...albumList.value, ...searchResults.value]
  const rotatedCount = Math.min(5, rotated.length) // Limit to 5 items
  const displayed = []
  for (let i = 0; i < rotatedCount; i++) {
    const index = (rotationCount.value + i) % rotated.length
    displayed.push(rotated[index])
  }
  return displayed
})

const rotateList = () => {
  rotationCount.value =
    (rotationCount.value + 1) %
    (albumList.value.length + searchResults.value.length)
}

watchDebounced(searchTerm, () => handleSearch(), {
  debounce: WAIT_BEFORE_SEARCH,
  maxWait: MAX_WAIT_BEFORE_SEARCH,
})

// on mount start rotation
onMounted(() => {
  rotationInterval.value = setInterval(rotateList, ROTATION_SPEED)
})

// cleanup
onUnmounted(() => {
  if (rotationInterval.value) {
    clearInterval(rotationInterval.value)
  }
})
</script>
<template>
  <section class="w-full sm:max-w-md">
    <h1 class="text-lg">Rotating Position</h1>
    <div class="space-y-3">
      <div class="relative">
        <AppTextInput
          v-model="searchTerm"
          placeholder="Search Band"
          type="search"
        />
        <button
          type="button"
          @click="searchTerm = ''"
          :title="searchTerm ? 'Clear search' : 'Search'"
          class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          <span>
            <icon:fluent:search-20-filled class="h-5 w-5" v-if="!searchTerm" />
            <icon:fluent:dismiss-20-filled class="h-5 w-5" v-else />
          </span>
        </button>
      </div>

      <div class="bg-zinc-200 rounded-md">
        <ul class="space-y-2 p-2">
          <li
            class="border p-2 bg-white rounded-md text-center"
            v-for="(item, index) in rotatedList"
            :key="index"
          >
            <span class="font-bold">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
