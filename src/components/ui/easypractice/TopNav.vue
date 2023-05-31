<script setup lang="ts">
const emit = defineEmits<{ (event: 'updateSidebar'): void }>()
</script>
<template>
  <nav
    class="h-[50px] shadow-sm flex bg-zinc-50 items-center px-[10px] lg:justify-end"
  >
    <button
      role="button"
      type="button"
      @click="emit('updateSidebar')"
      class="lg:hidden"
    >
      <icon:fluent:navigation-16-filled
        class="h-[42px] w-[42px] text-zinc-500"
      />
    </button>

    <button role="button" type="button" class="ml-auto lg:ml-0">
      <icon:fluent:person-16-filled class="h-[42px] w-[42px] text-zinc-500" />
    </button>
  </nav>
</template>
