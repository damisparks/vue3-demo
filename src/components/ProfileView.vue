<script setup lang="ts">
import { IProfileViewDTS } from '@/types'
defineProps<{ user: IProfileViewDTS }>()
</script>
<template>
  <div class="shadow-lg bg-white p-2">
    <div class="flex flex-col items-center my-4">
      <img
        :src="user.image"
        :alt="user.name || 'user'"
        class="aspect-[4/5] w-52 rounded-lg object-cover"
      />
      <h3>
        <span
          class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
        >
          {{ user.name }}
        </span>
        <span class="text-sm ml-3 font-normal">{{ user.gender }}</span>
      </h3>
      <p class="font-medium text-gray-600">
        {{ user.status }} - {{ user.species }}
      </p>
      <p class="mt-6 text-base leading-7 text-gray-600">Origin:</p>
      <p class="font-medium text-gray-600">
        Earth (Evil Rick's Target Dimension)
      </p>
    </div>
    {{ user }}
  </div>
</template>
