<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'
import { useQuery } from 'vue-query'
import { useUserStore } from '@/store/UserStore'
import services from '@/services'
const userStore = useUserStore()
const userCacheKey = ref<string>('users')

const { isLoading, isError, data, error } = useQuery(
  userCacheKey.value,
  async () => await services.getAllCharacters(),
  {
    select: (res) => res.data,
    onSuccess: (data) => {
      userStore.$patch({ users: data.results })
    },
  }
)
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
        <!-- TODO - add pagination -->
        <button class="btn-primary">Previous</button>
        <button class="btn-primary">Next</button>
      </div>
    </div>
    <p v-else>Nothing to show</p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
