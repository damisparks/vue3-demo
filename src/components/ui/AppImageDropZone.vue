<script setup lang="ts">
import { INoticeType } from '@/types'
import { useDropZone, useBase64 } from '@vueuse/core'
import AppHint from '../AppHint.vue'
import AppImage from '../ui/AppImage.vue'
type AppPhotoType = string | undefined | File | null

const ALLOWED_IMG_FILE_SIZE_IN_BYTE = 2000000

const msg = ref<{ text: string | null; type: INoticeType }>({
  text: null,
  type: 'info',
})

const dropZoneRef = ref(null)
const emit = defineEmits<{ (e: 'image:upload', payload: AppPhotoType): void }>()

const image = ref() as Ref<File>
const { base64 } = useBase64(image)
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const src = computed(() => {
  return typeof image.value === 'string' ? image.value : base64.value
})

const handleFiles = async (files: FileList | File[] | null) => {
  if (!files) return
  const imageFile = files[0]
  if (!imageFile) return
  if (imageFile.size > ALLOWED_IMG_FILE_SIZE_IN_BYTE) {
    msg.value.text = 'Image file is greater then 2 MB. Please choose again.'
    msg.value.type = 'error'
    return
  }
  image.value = imageFile
}

function onDrop(files: File[] | null) {
  handleFiles(files)
}

function onFilePicked(e: Event) {
  handleFiles((e.target as HTMLInputElement).files)
}

watch(
  () => src.value,
  (newValue) => emit('image:upload', newValue)
)
</script>

<template>
  <div
    class="bg-gray-100 flex justify-center items-center border-gray-100 relative rounded-md"
    ref="dropZoneRef"
    :class="{
      'border-info': isOverDropZone,
      'border-2': isOverDropZone,
    }"
  >
    <label class="absolute top-0 left-0 right-0 bottom-0 block">
      <input
        type="file"
        @change="onFilePicked"
        accept="image/png, image/jpeg, image/webp"
        class="hidden"
      />
    </label>

    <AppImage v-if="image" :src="src" class="h-full w-full p-3" />
    <template v-else>{{ 'Click or drop to upload image' }}</template>
    <AppHint v-if="!image && msg.text" :hint="msg.text">
      {{ msg.text }}
    </AppHint>
  </div>
</template>
