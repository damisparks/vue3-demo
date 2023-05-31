<script setup lang="ts">
import AppointmentCreator from '@/components/ui/easypractice/AppointmentCreator.vue'
import PeekRenderer from '@/components/ui/easypractice/PeekRenderer.vue'
import TopHeaderContext from '@/components/ui/easypractice/TopHeaderContext.vue'
import AppBasicTable from '@/components/ui/AppBasicTable.vue'

// ref or reactive
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const appointmentStore = useAppointmentStore()
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
        <AppointmentCreator @success-update:appointment="isOpen = false" />
      </template>
    </PeekRenderer>

    <!-- table content will be here -->
    <div v-if="appointmentStore.appointments.length > 0">
      <AppBasicTable
        :data="appointmentStore.appointments"
        :fields="['id', 'subject', 'description', 'date', 'actions']"
        :headers="['ID', 'Subject', 'Description', 'Date', 'Actions']"
      >
        <template #cell(date)="{ item: date }">
          {{ new Date(date).toLocaleDateString() }}
        </template>
      </AppBasicTable>
    </div>
    <p class="text-zinc-500 mt-4">You have no appointments yet</p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
