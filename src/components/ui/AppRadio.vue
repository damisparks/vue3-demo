<script setup lang="ts">
type RadioModelType = null | number | string
const props = withDefaults(
  defineProps<{
    modelValue?: null | undefined | number | string
    label?: string
    value: RadioModelType
    forTarget?: string
  }>(),
  { modelValue: '', label: '', accent: 'indigo-600' }
)

const emit = defineEmits<{
  (event: 'update:modelValue', value: RadioModelType): void
}>()
</script>
<template>
  <span>
    <input
      type="radio"
      :checked="props.modelValue === value"
      :value="value"
      :id="forTarget"
      class="rounded-full h-5 w-5 border-gray-300 dark:border-zinc-500 cursor-pointer focus:ring-indigo-600 focus:ring-1 text-indigo-600 dark:text-zinc-500 dark:bg-night"
      @change="emit('update:modelValue', value)"
      v-bind="$attrs"
    />
    <label
      :for="forTarget"
      v-if="label"
      class="ml-3 text-sm font-medium text-zinc-700 cursor-pointer dark:text-zinc-300/70"
    >
      {{ label }}
    </label>
  </span>
</template>
