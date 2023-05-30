<script setup lang="ts">
const emit = defineEmits<{ (event: 'updateSidebar'): void }>()
</script>
<template>
  <nav class="h-[50px] shadow-sm flex justify-between items-center px-[10px]">
    <button role="button" type="button" @click="emit('updateSidebar')">
      <icon:fluent:navigation-16-filled  class="h-[42px] w-[42px] text-zinc-500"/>
    </button>

    <button role="button" type="button">
      <icon:fluent:person-16-filled class="h-[42px] w-[42px] text-zinc-500"/>
    </button>
  </nav>
</template>
