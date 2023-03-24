<script setup lang="ts">
import { useId } from '@/use/useId'
import { IProfileDTS } from '@/types'
import { object, string } from 'yup'
import AppImageDropZone from './ui/AppImageDropZone.vue'
import AppRadioGroup from './ui/AppRadioGroup.vue'
import AppTextInput from './ui/AppTextInput.vue'

const genderOptions = [
  { label: 'male', value: 'Male' },
  { label: 'female', value: 'Female' },
]

const AppHint = defineAsyncComponent(
  () => import(/* webpackChunkName: 'AppHint' */ '@/components/AppHint.vue')
)

const hideImgInput = ref(false)
const otherError = ref<any>(null)

// form validation schema
const validationSchema = object({
  name: string().required(),
  image: string().required('Image file missing'),
  gender: string().required().label('Gender'),
})

const { id } = useId()
const { handleSubmit, isSubmitting, resetForm } = useForm({ validationSchema })
const userStore = useUserStore()
const router = useRouter()

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
  try {
    const userDetail: IProfileDTS = {
      id: id,
      name: values.name,
      image: values.image,
      gender: values.gender,
      species: 'Human',
      type: '',
      status: 'Alive',
      favourite: false,
    }
    userStore.addNewProfile(userDetail)
    resetForm()
    router.push({ name: 'index' })
  } catch (error) {
    otherError.value = error
  }
})
</script>
<template>
  <form
    class="rounded-md shadow-lg px-4 py-6 colormode-bg space-y-4 dark:border-zinc-100/20 dark:border"
    @submit="onCreate"
  >
    <fieldset>
      <label
        for="name"
        class="text-sm font-medium text-zinc-900 dark:text-zinc-300/90"
        >Name</label
      >
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
      <label
        for="gender"
        class="text-sm font-medium text-zinc-900 dark:text-zinc-300"
      >
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
    <AppHint v-if="otherError" :hint="otherError" variant="error">
      {{ otherError }}
    </AppHint>
    <button
      :disabled="isSubmitting"
      :class="{ 'cursor-not-allowed opacity-70': isSubmitting }"
      class="btn-primary w-full"
      type="submit"
    >
      Create
    </button>
  </form>
</template>
