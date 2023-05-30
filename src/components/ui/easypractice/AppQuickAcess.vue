<script setup lang="ts">
const props = defineProps<{ showExplore: boolean }>()
const emit = defineEmits<{
  (event: 'update:app-quickaccess', showExplore: boolean): void
}>()
const onExplore = () => {
  emit('update:app-quickaccess', props.showExplore)
}
</script>
<template>
  <div class="relative">
    <div
      v-if="showExplore"
      tabindex="-1"
      class="fixed inset-0 bg-opacity-75 transition-opacity -z-10"
      aria-hidden="true"
      @click="onExplore"
    ></div>
    <div>
      <button role="button" type="button" @click="onExplore">
        <icon:fluent:grid-dots-20-filled
          class="text-zinc-700 h-12 w-12 rounded-md shadow-xl bg-white"
        />
      </button>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="showExplore"
        class="rounded-md shadow-xl w-56 absolute right-0 bottom-14 bg-white p-2 origin-bottom-right"
      >
        <div>
          <p class="capitalize text-zinc-700 font-semibold">my apps</p>
          <div class="h-[1px] bg-zinc-200 my-[10px]"></div>
        </div>
        <slot name="items"></slot>
      </div>
    </transition>
  </div>
</template>
