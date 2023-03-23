<script setup lang="ts">
import AppRadio from './AppRadio.vue'

defineProps<{
  modelValue: null | undefined | number | string
  options: { label: string; value: string }[]
}>()
</script>
<template>
  <div v-for="opt in options" :key="`radio-group-label-${opt.label}`">
    <AppRadio
      :aria-invalid="!modelValue ? true : false"
      :value="opt.value"
      :for-target="opt.label"
      :model-value="modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      :label="opt.label"
    />
  </div>
</template>
