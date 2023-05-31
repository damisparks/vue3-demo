<script setup lang="ts">
defineProps<{
  headers: string[] // the table header
  fields: string[] // the field for tracking the data
  data: Array<Record<any, any>>
}>()

const slots = useSlots()
</script>
<template>
  <div class="mt-8 flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="relative overflow-hidden shadow-lg rounded-lg">
          <table class="min-w-full table-fixed divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                  <input
                    type="checkbox"
                    class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-main focus:ring-1 focus:ring-main sm:left-6"
                  />
                </th>
                <th
                  v-for="(head, index) in headers"
                  :key="head"
                  scope="col"
                  :class="[
                    index === 0 ? 'min-w-[12rem] py-3.5 pr-3' : 'px-3 py-3.5',
                    index === headers.length - 1
                      ? 'relative py-3.5 pl-3 pr-4 sm:pr-6'
                      : '',
                  ]"
                  class="text-left text-sm font-semibold text-gray-900 uppercase"
                >
                  <slot :name="`head(${head})`"> {{ head }}</slot>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <!-- Selected: "bg-gray-50" -->
              <tr v-for="(item, idx) in data" :key="idx">
                <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                  <!-- Selected row marker, only show when row is selected. -->
                  <input
                    type="checkbox"
                    class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-main focus:ring-1 focus:ring-main sm:left-6"
                  />
                </td>
                <!-- Selected: "text-main", Not Selected: "text-gray-900" -->
                <td
                  v-for="(field, index) in fields"
                  :key="field"
                  class="whitespace-nowrap py-4 text-sm font-medium"
                  :class="
                    index === 0 ? 'pr-3 text-gray-900' : 'px-3 text-gray-500'
                  "
                >
                  <slot :name="`cell(${field})`" :item="item[field]">
                    {{ item[field] }}
                  </slot>
                </td>
                <td
                  v-if="slots.actionColumn"
                  class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                >
                  <slot name="actionColumn" :dataItem="item"></slot>
                  <!-- <a href="#" class="text-main hover:text-indigo-900"
                    >Edit<span class="sr-only">, Lindsay Walton</span></a
                  > -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
