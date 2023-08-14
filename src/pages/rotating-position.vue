<script setup lang="ts">
import client from '@/services/apiClient'
import { watchDebounced } from '@vueuse/core'
const searchTerm = ref('')
const albumList = ref<string[]>(['A', 'B', 'C', 'D', 'E'])
const searchResults = ref<string[]>([])
const rotationInterval = ref<NodeJS.Timeout | null>(null)
const rotationCount = ref(0)
const rotationSpeed = ref(1000)
const waitBeforeSearch = ref(1000)
const maxWaitBeforeSearch = ref(5000)

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

// rotating list
// const rotatedList = computed(() => {
//   const rotated = [...albumList.value, ...searchResults.value]
//   for (let i = 0; i < rotationCount.value; i++) {
//     const firstItem = rotated.shift()
//     if (firstItem) {
//       rotated.push(firstItem)
//     }
//   }

//   return rotated
// })

// rotating list with max of 5 items
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

// rotating list
// const rotateList = () => {
//   rotationCount.value = (rotationCount.value + 1) % albumList.value.length
// }

// rotating list with max of 5 items
const rotateList = () => {
  rotationCount.value =
    (rotationCount.value + 1) %
    (albumList.value.length + searchResults.value.length)
}

// watch for changes in search term and call handleSearch after 1 second
watchDebounced(searchTerm, () => handleSearch(), {
  debounce: waitBeforeSearch,
  maxWait: maxWaitBeforeSearch,
})

// on mount start rotation
onMounted(() => {
  rotationInterval.value = setInterval(rotateList, rotationSpeed.value)
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
