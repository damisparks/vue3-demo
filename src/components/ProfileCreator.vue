<script setup lang="ts">
import { object, string } from 'yup'
import AppImageDropZone from './ui/AppImageDropZone.vue'
import AppRadioGroup from './ui/AppRadioGroup.vue'
import AppTextInput from './ui/AppTextInput.vue'

const AppHint = defineAsyncComponent(
  () => import(/* webpackChunkName: 'AppHint' */ '@/components/AppHint.vue')
)

const hideImgInput = ref(false)
const genderOptions = [
  { label: 'male', value: 'Male' },
  { label: 'female', value: 'Female' },
]
// form validation schema
const validationSchema = object({
  name: string().required(),
  image: string().required('Image file missing'),
  gender: string().required().label('Gender'),
})

const { handleSubmit } = useForm({ validationSchema })

const { value: name, errorMessage: nameError } = useField('name', undefined, {
  initialValue: '',
})
const { value: image, errorMessage: imageError } = useField(
  'image',
  undefined,
  { initialValue: '' }
)

const { value: gender, errorMessage: genderError } = useField(
  'gender',
  undefined,
  { initialValue: '' }
)

const onCreate = handleSubmit((values) => {
  console.log(values)
  const userDetail = {
    name: values.name,
    image: values.image,
    gender: values.gender,
  }
})
</script>
<template>
  <form
    class="rounded-md shadow-lg px-4 py-6 bg-white space-y-4"
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
      <label for="gender" class="text-sm font-medium text-gray-900">
        Gender
      </label>
      <AppRadioGroup :options="genderOptions" v-model="gender" />
      <AppHint v-if="genderError" :hint="genderError" variant="error">
        {{ genderError }}
      </AppHint>
    </fieldset>
    <fieldset>
      <AppTextInput
        type="text"
        name="image"
        id="image"
        v-if="hideImgInput"
        v-model="image"
        :error="imageError"
      />
      <AppImageDropZone
        id="image"
        @image:upload="(payload) => (image = payload as string)"
      />

      <AppHint v-if="imageError" :hint="imageError" variant="error">
        {{ imageError }}
      </AppHint>
    </fieldset>
    <button class="btn-primary w-full" type="submit">Create</button>
  </form>
</template>
