<script setup lang="ts">
import AppointmentCreator from '@/components/ui/easypractice/AppointmentCreator.vue'
import PeekRenderer from '@/components/ui/easypractice/PeekRenderer.vue'
import TopHeaderContext from '@/components/ui/easypractice/TopHeaderContext.vue'
import AppBasicTable from '@/components/ui/AppBasicTable.vue'
import AppointmentEditor from '@/components/ui/easypractice/AppointmentEditor.vue'
import { IAppointment } from '@/types'

// ref or reactive
const isOpen = ref(false)
const showCreateAppointment = ref(false)
const currentAppointment = ref<IAppointment[]>([])

// store  instance
const appointmentStore = useAppointmentStore()

const router = useRouter()

// methods or functions
const backToList = () => {
  router.push({ name: 'easypractice-appointments' })
  showCreateAppointment.value = false
}

const onViewAppointment = (id: string) => {
  try {
    router.push({
      name: 'easypractice-appointments',
      query: { id: id },
    })
    const appointment = appointmentStore.getCurrentAppointment(id)
    currentAppointment.value = appointment
    showCreateAppointment.value = true
  } catch (error) {
    alert('something went wrong')
  }
}

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
        <AppointmentCreator @success-update:appointment="isOpen = false" />
      </template>
    </PeekRenderer>

    <!-- table content will be here -->

    <AppBasicTable
      v-if="appointmentStore.hasAppointments"
      :data="appointmentStore.allAppointments"
      :fields="['id', 'subject', 'description', 'date']"
      :headers="['ID', 'Subject', 'Description', 'Date', 'Actions']"
    >
      <template #cell(date)="{ item: date }">
        {{ new Date(date).toLocaleDateString() }}
      </template>
      <template #actionColumn="{ dataItem: item }">
        <div class="flex items-start">
          <button
            type="button"
            @click="onViewAppointment(item.id)"
            class="text-gray-700 h-7 w-7 p-1.5 rounded-full hover:bg-gray-200"
          >
            <icon:fluent:document-edit-16-regular />
          </button>
        </div>
      </template>
    </AppBasicTable>
    <p v-else class="text-zinc-500 mt-4">You have no appointments yet!</p>
    <PeekRenderer :open="showCreateAppointment" @update:peekrender="backToList">
      <template #content>
        <AppointmentEditor
          :appointment="currentAppointment[0]"
          @onupdate:appointment-editor="showCreateAppointment = false"
        />
      </template>
    </PeekRenderer>
  </div>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
