<script setup lang="ts">
import AppTextInput from '@/components/ui/AppTextInput.vue'
import { object, string } from 'yup'
import AppTextarea from '../AppTextarea.vue'

const AppHint = defineAsyncComponent(
  () => import(/* webpackChunkName: 'AppHint' */ '@/components/AppHint.vue')
)

const validationSchema = object({
  subject: string().required('subject is required'),
  description: string().required('description is required'),
})
const { handleSubmit } = useForm({ validationSchema })
const { value: subject, errorMessage: subjectError } = useField(
  'subject',
  undefined,
  { initialValue: '' }
)
const { value: description, errorMessage: descriptionError } = useField(
  'description',
  undefined,
  { initialValue: '' }
)

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>
<template>
  <div>
    <form @submit="onSubmit">
      <fieldset>
        <label
          for="name"
          class="text-sm font-medium text-zinc-900 dark:text-zinc-300/90"
        >
          Subject
        </label>
        <AppTextInput
          :error="subjectError"
          type="text"
          name="subject"
          id="subject"
          v-model="subject"
        />
        <AppHint v-if="subjectError" :hint="subjectError" variant="error">
        </AppHint>
      </fieldset>
      <fieldset>
        <label
          for="name"
          class="text-sm font-medium text-zinc-900 dark:text-zinc-300/90"
        >
          Description
        </label>
        <AppTextarea
          :error="descriptionError"
          name="description"
          id="description"
          v-model="description"
        />
        <AppHint
          v-if="descriptionError"
          :hint="descriptionError"
          variant="error"
        >
        </AppHint>
      </fieldset>
      <button class="btn-main w-full">
        <span>create</span>
      </button>
    </form>
  </div>
</template>
