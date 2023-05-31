<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

// props
let props = withDefaults(
  defineProps<{
    collapsedWidth?: string
    collapsed: boolean
    userToggled: boolean
  }>(),
  {
    collapsed: false,
    userToggled: false,
  }
)

let screenTest = (e: MediaQueryListEvent) => {
  let isLargeScreen = e.matches
  if (isLargeScreen || props.userToggled) {
    emit('update:collapsed', !isLargeScreen)
  }
}

onMounted(() => {
  mql.addEventListener('change', screenTest)
  let isLargeScreen = mql.matches
  if (isLargeScreen || props.userToggled) {
    emit('update:collapsed', !isLargeScreen)
  }
})

let mql = window.matchMedia('(min-width: 1024px)')
const emit = defineEmits<{
  (event: 'toggleSidebar'): void
  (event: 'update:collapsed', val: boolean): void
}>()

onMounted(() => {
  mql.addEventListener('change', screenTest)
  // set initial value
  let isLargeScreen = mql.matches
  emit('update:collapsed', !isLargeScreen)
})

onUnmounted(() => {
  mql.removeEventListener('change', screenTest)
})
</script>

<template>
  <transition
    enter-active-class="transition ease-in-out duration-200 transform "
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in-out duration-200 transform"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div class="fixed z-50">
      <div
        class="fixed inset-0 bg-zinc-400 bg-opacity-75 lg:hidden"
        aria-hidden="true"
        @click="emit('toggleSidebar')"
        v-show="collapsed"
      ></div>
      <aside
        :class="[
          'bg-zinc-50 transition-all h-full flex flex-col pb-32 fixed top-0 z-10 sm:z-0 w-64 overflow-y-auto',
          collapsed ? 'lg:block' : 'hidden lg:block',
        ]"
      >
        <section class="overflow-y-auto py-[10px]">
          <div class="bg-zinc-100 px-2 py-[10px] mx-[10px] rounded-[4px]">
            <span class="text-main font-semibold">EasyPractice</span>
            <!-- create a divider in tailwind css -->
          </div>
          <div class="h-[1px] bg-zinc-200 my-[10px] mx-[10px]"></div>
          <slot>sidebar content</slot>
        </section>
        <div
          class="fixed bottom-0 py-3.5 w-64 border-t border-primary bg-zinc-50 text-sm px-4 flex items-center justify-center"
        >
          <p class="mr-4 leading-6">
            &copy; {{ new Date().getFullYear() }} EasyPractice
          </p>
        </div>
      </aside>
    </div>
  </transition>
</template>
