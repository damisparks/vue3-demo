<script setup lang="ts">
import { IAppointment } from '@/types'
import { object, string } from 'yup'

// async component
const AppHint = defineAsyncComponent(
  () => import(/* webpackChunkName: 'AppHint' */ '@/components/AppHint.vue')
)

const props = defineProps<{ appointment: IAppointment }>()
const currentAppointment = ref<IAppointment>(props.appointment)
const formChanged = ref(false)

const appointmentStore = useAppointmentStore()

const emit = defineEmits<{ (event: 'onupdate:appointment-editor'): void }>()

const validationSchema = object({
  subject: string().required('subject is required'),
  description: string().required('description is required'),
})

const { handleSubmit, resetForm } = useForm({ validationSchema })

const { value: subject, errorMessage: subjectError } = useField(
  'subject',
  undefined,
  { initialValue: currentAppointment.value.subject }
)

const { value: description, errorMessage: descriptionError } = useField(
  'description',
  undefined,
  { initialValue: currentAppointment.value.description }
)

const onSubmit = handleSubmit((values) => {
  const { subject, description } = values
  const appointment: IAppointment = {
    subject,
    description,
    id: currentAppointment.value.id,
    date: currentAppointment.value.date,
  }
  try {
    appointmentStore.updateAppointment(appointment)
    resetForm()
    emit('onupdate:appointment-editor')
  } catch (error) {
    alert('something went wrong')
  }
})

watch([subject, description], () => {
  if (subject.value !== currentAppointment.value.subject) {
    formChanged.value = true
  }
  if (description.value !== currentAppointment.value.description) {
    formChanged.value = true
  }
})
</script>
<template>
  <form @submit="onSubmit" class="space-y-3">
    <AppHint variant="info" hint="You are editing this appointment" />
    <fieldset>
      <label
        for="name"
        class="text-sm font-medium text-zinc-900 dark:text-zinc-300/90"
      >
        Subject
      </label>
      <AppTextInput
        v-model="subject"
        id="subject"
        placeholder="Enter subject"
        class="mt-1"
        type="text"
      />
      <p class="text-red-500 text-xs italic">{{ subjectError }}</p>
    </fieldset>

    <fieldset>
      <label
        for="description"
        class="text-sm font-medium text-zinc-900 dark:text-zinc-300/90"
      >
        Description
      </label>
      <AppTextarea
        v-model="description"
        id="description"
        placeholder="Enter description"
        class="mt-1"
      />
      <p class="text-red-500 text-xs italic">{{ descriptionError }}</p>
    </fieldset>
    <div class="flex justify-end space-x-2">
      <button
        type="button"
        class="btn-outline-main uppercase"
        @click="emit('onupdate:appointment-editor')"
      >
        cancel
      </button>
      <button
        :disabled="!formChanged"
        :class="{
          'cursor-not-allowed opacity-50 disabled': !formChanged,
        }"
        type="submit"
        class="btn-main uppercase"
      >
        save changes
      </button>
    </div>
  </form>
</template>
