<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'
import { useQuery } from 'vue-query'
import { useUserStore } from '@/store/UserStore'
import services from '@/services'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const userCacheKey = ref<string>('users')

const currentPage = ref<any>(route.query.page || 1)
const getUserFn = async () => await services.getAllCharacters(currentPage.value)

const userQueryFn = () =>
  useQuery([userCacheKey.value, currentPage], getUserFn, {
    select: (res) => res.data,
    onSuccess: (data) => {
      userStore.$patch({ users: data.results })
      userStore.$patch({ metadata: data.info })
    },
  })

const { isLoading, isError, data, error } = userQueryFn()

const changePageQuery = () =>
  router.push({ name: 'index', query: { page: currentPage.value } })

const goToNextPage = () => {
  currentPage.value++
  getUserFn()
  changePageQuery()
}

const goToPrevious = () => {
  currentPage.value--
  getUserFn()
  changePageQuery()
}
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data" class="grid lg:grid-cols-2 gap-6">
      <!-- {{ data.results }} -->
      <div v-for="item in userStore.allUsers" :key="item.id">
        <ProfileCard :user="item" />
      </div>
      <div class="flex items-center justify-between mb-4">
        <button
          v-if="userStore.metadata.prev"
          class="btn-primary"
          @click="goToPrevious"
        >
          Previous
        </button>
        <button
          v-if="userStore.metadata.next"
          class="btn-primary"
          role="button"
          @click="goToNextPage"
        >
          Next
        </button>
      </div>
    </div>
    <p v-else>Nothing to show</p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
