<script setup lang="ts">
import { object, string } from 'yup'
import AppTextInput from './ui/AppTextInput.vue'

const AppHint = defineAsyncComponent(
  () => import(/* webpackChunkName: 'AppHint' */ '@/components/AppHint.vue')
)

// form validation schema
const validationSchema = object({
  name: string().required(),
  image: string().url().required().label('Image url'),
})

const { handleSubmit, resetForm, isSubmitting } = useForm({ validationSchema })

const { value: name, errorMessage: nameError } = useField('name', undefined, {
  initialValue: '',
})
const { value: image, errorMessage: imageError } = useField(
  'image',
  undefined,
  { initialValue: '' }
)

const onCreate = handleSubmit((values) => {
  console.log(values)
})
</script>
<template>
  <div>
    <form
      class="rounded-md shadow-lg p-4 bg-white space-y-4"
      @submit="onCreate"
    >
      <fieldset>
        <label for="name" class="text-sm font-medium text-gray-900">Name</label>
        <AppTextInput
          type="text"
          name="name"
          id="name"
          v-model="name"
          :error="nameError"
        />
        <AppHint v-if="nameError" :hint="nameError" variant="error">
          {{ nameError }}
        </AppHint>
      </fieldset>
      <fieldset>
        <label for="name" class="text-sm font-medium text-gray-900">
          Image
        </label>
        <AppTextInput
          type="text"
          name="image"
          id="image"
          v-model="image"
          :error="imageError"
        />
        <AppHint v-if="imageError" :hint="imageError" variant="error">
          {{ imageError }}
        </AppHint>
      </fieldset>

      <button class="btn-primary w-full" type="submit">Create</button>
    </form>
  </div>
</template>
