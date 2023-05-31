<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: string | number | undefined | string[]
    error?: string
  }>(),
  { modelValue: '', error: '' }
)

// events
const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
}>()

// computed
const errorClass = computed(() => {
  return { 'border border-red-300': props.error }
})

const isValid = computed(() => {
  return { 'border border-green-300': props.modelValue && !props.error }
})

// methods
const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <textarea
    v-bind="$attrs"
    :aria-invalid="error ? true : false"
    :value="props.modelValue"
    @input="onInput($event)"
    :class="[errorClass, isValid]"
    class="shadow-sm mt-1 focus:ring-0 focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"
  />
</template>
