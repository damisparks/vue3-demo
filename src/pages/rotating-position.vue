<script setup lang="ts">
import apiClient from '@/services/apiClient'
import { watchDebounced } from '@vueuse/core'
const searchTerm = ref('')
const albumList = ref<string[]>(['A', 'B', 'C', 'D', 'E'])
const searchResults = ref<string[]>([])
const rotationInterval = ref<NodeJS.Timeout | null>(null)
const rotationCount = ref(0)

const search = async () => {
  if (!searchTerm.value) return
  try {
    const { data } = await apiClient.getAllAlbums(searchTerm.value)
    const firstFiveDocs: string[] = [...data.results]
      .slice(0, 5)
      .map((doc: any) => doc.collectionName)
      .sort((a: string, b: string) => a.localeCompare(b))
    searchResults.value = firstFiveDocs
  } catch (error) {
    console.error('Error fetching data', error)
  }
}

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

watchDebounced(searchTerm, () => handleSearch(), {
  debounce: 1000,
  maxWait: 5000,
})

onMounted(() => {
  rotationInterval.value = setInterval(rotateList, 1000)
})

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
      <AppTextInput
        v-model="searchTerm"
        placeholder="Search Band"
        type="search"
      />

      <div class="bg-zinc-200 rounded-md">
        <ul class="space-y-2 p-2">
          <li
            class="border p-2 bg-white rounded-md text-center"
            v-for="(item, index) in rotatedList"
            :key="index"
          >
            {{ item }}
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
