<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue'

const userStore = useUserStore()
</script>
<template>
  <p class="text-center colormode-text" v-if="userStore.noFavourites">
    No favourites yet!
  </p>
  <div class="grid lg:grid-cols-2 gap-6" v-else>
    <div v-for="item in userStore.allFavourites" :key="item.id">
      <ProfileCard :user="item" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: main
</route>
