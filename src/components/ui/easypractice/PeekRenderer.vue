<script setup lang="ts">
defineProps<{ open: boolean }>()
const emit = defineEmits<{ (event: 'update:peekrender'): void }>()
</script>
<template>
  <Transition
    enter-active-class="transform transition ease-in-out duration-300 sm:duration-500"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-300 sm:duration-500"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div class="fixed inset-0 overflow-hidden z-20" v-if="open">
      <div
        @click="emit('update:peekrender')"
        class="absolute opacity-70 inset-0 z-0"
      ></div>
      <div class="absolute bg-gray-200 top-0 right-0 overflow-hidden">
        <!-- TODO ==>  update the element stacking or the z-index -->
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
        >
          <div class="pointer-events-auto w-screen max-w-[720px]">
            <div
              class="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl border-l border-gray-100"
            >
              <div class="flex items-center px-2 py-1 mb-2">
                <button
                  class="rounded-full hover:bg-gray-300 p-0.5"
                  @click="emit('update:peekrender')"
                >
                  <icon:fluent:chevron-double-right-16-regular
                    class="h-6 w-6 text-gray-600"
                  />
                </button>
              </div>
              <div class="px-4 relative flex-1">
                <slot name="content"></slot>
                <!-- slot -->
                <!-- <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  soluta est suscipit delectus magnam commodi nemo omnis
                  excepturi inventore laudantium laboriosam consectetur saepe
                  fugiat cupiditate, necessitatibus fuga ea sint. Vel.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  soluta est suscipit delectus magnam commodi nemo omnis
                  excepturi inventore laudantium laboriosam consectetur saepe
                  fugiat cupiditate, necessitatibus fuga ea sint. Vel.
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
