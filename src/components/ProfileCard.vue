<script setup lang="ts">
import { IProfileDTS } from '@/types'
import AppGenderChip from './ui/AppGenderChip.vue'
defineProps<{ user: IProfileDTS }>()
</script>

<template>
  <div class="rounded-lg shadow-lg flex relative bg-white">
    <RouterLink :to="{ name: 'user-id', params: { id: user.id } }">
      <img
        class="w-52 h-full flex-none rounded-l-lg object-cover"
        loading="lazy"
        :src="user.image"
        :alt="user.name ? user.name : 'user'"
      />
      <AppGenderChip>
        {{ user.gender.toUpperCase() }}
      </AppGenderChip>
    </RouterLink>
    <div class="flex flex-col p-3">
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {{ user.name }}
      </h3>
      <p class="flex items-center">
        <ProfileStatus :user-status="user.status || 'Unknown'" />
        <span class="font-medium text-gray-600 ml-2">
          {{ user.status }} - {{ user.species }}
        </span>
      </p>
      <p class="mt-4 text-base leading-7 text-gray-600">
        Type:
        <span class="font-medium text-gray-600">
          {{ user.type || 'Not provided' }}
        </span>
      </p>
    </div>
  </div>
</template>
