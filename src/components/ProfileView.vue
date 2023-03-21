<script setup lang="ts">
import { IProfileViewDTS } from '@/types'
defineProps<{ user: IProfileViewDTS }>()
</script>

<template>
  <div class="shadow-lg bg-white p-2">
    <div class="flex flex-col items-center my-4">
      <div class="relative">
        <img
          :src="user.image"
          :alt="user.name || 'user'"
          class="aspect-[4/5] w-64 sm:w-72 rounded-lg object-cover"
        />
        <span
          class="absolute top-2 right-2 text-sm bg-blue-800 rounded-md shadow-lg px-2 py-0.5 text-white font-semibold"
        >
          {{ user.gender.toUpperCase() }}
        </span>
      </div>
      <h3>
        <span
          class="text-lg font-semibold leading-8 tracking-tight text-gray-900"
        >
          {{ user.name }}
        </span>
      </h3>
      <p class="font-medium text-gray-600">
        {{ user.status }} - {{ user.species }}
      </p>
      <p class="mt-4 text-base leading-7 text-gray-600">
        Origin:
        <a
          class="font-medium text-gray-600 hover:underline"
          :href="user.origin.url"
          target="_blank"
        >
          {{ user.origin.name }}
        </a>
      </p>
      <p class="text-base leading-7 text-gray-600">
        Location:
        <a
          class="font-medium text-gray-600 hover:underline"
          :href="user.location.url"
          target="_blank"
        >
          {{ user.location.name }}
        </a>
      </p>
      <ul role="list" class="divide-y divide-gray-200 w-full">
        <li v-for="ep in user.episode" :key="ep" class="flex py-4">
          <div class="w-full">
            <p class="text-sm font-medium text-gray-900">
              Episode {{ ep.substring(ep.lastIndexOf('/') + 1) }}
            </p>
            <a
              :href="ep"
              class="text-sm hover:underline rounded-md bg-blue-50 text-blue-800 px-2 py-1"
            >
              View Episodie
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
