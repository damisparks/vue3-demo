<script setup lang="ts">
import { IProfileDTS } from '@/types'
defineProps<{ user: IProfileDTS }>()
</script>

<template>
  <div class="rounded-lg shadow-lg flex">
    <RouterLink :to="{ name: 'user-id', params: { id: user.id } }">
      <img
        class="w-52 h-full flex-none rounded-l-lg object-cover"
        loading="lazy"
        :src="user.image"
        :alt="user.name ? user.name : 'user'"
      />
    </RouterLink>
    <div class="flex flex-col p-3">
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {{ user.name }}
      </h3>
      <p class="font-medium text-gray-600">Alive - Human</p>

      <p class="mt-6 text-base leading-7 text-gray-600">Last known location:</p>
      <p class="font-medium text-gray-600">
        Earth (Evil Rick's Target Dimension)
      </p>
      <p class="mt-6 text-base leading-7 text-gray-600">First seen in:</p>
      <p class="text-lg font-medium text-gray-600">
        Close Rick-counters of the Rick Kind
      </p>
    </div>
  </div>
</template>
