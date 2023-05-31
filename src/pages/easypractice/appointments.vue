<script setup lang="ts">
import AppointmentCreator from '@/components/ui/easypractice/AppointmentCreator.vue'
import PeekRenderer from '@/components/ui/easypractice/PeekRenderer.vue'
import TopHeaderContext from '@/components/ui/easypractice/TopHeaderContext.vue'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div>
    <TopHeaderContext>
      <template #ctxleft>
        <div class="space-y-3">
          <HeaderTitle>Appointments</HeaderTitle>
          <p class="text-zinc-500">List of your appointments</p>
        </div>
      </template>
      <template #ctxright>
        <button
          class="btn-main capitalize w-full sm:w-fit"
          @click="isOpen = true"
        >
          create appointment
        </button>
      </template>
    </TopHeaderContext>
    <PeekRenderer :open="isOpen" @update:peekrender="toggle">
      <template #content>
        <AppointmentCreator />
      </template>
    </PeekRenderer>
  </div>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
