<script setup lang="ts">
import AppQuickAcess from '@/components/ui/easypractice/AppQuickAcess.vue'
import AppSidebar from '@/components/ui/easypractice/AppSidebar.vue'
import SidebarListItem from '@/components/ui/easypractice/SidebarListItem.vue'
import TopNav from '@/components/ui/easypractice/TopNav.vue'
import { myApp } from '@/components/ui/easypractice/data/myApp'
const showExplore = ref(false)
const showSidebar = ref(false)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const canExplore = () => {
  showExplore.value = !showExplore.value
}

const items = computed(() => {
  return myApp
})
</script>

<template>
  <div class="flex flex-col">
    <TopNav @update-sidebar="toggleSidebar" class="sticky top-0" />
    <div>
      <!-- sidebar -->
      <AppSidebar :collapsed="showSidebar" @toggle-sidebar="toggleSidebar">
        <SidebarListItem class="mx-[10px] py-[10px]" />
      </AppSidebar>
    </div>

    <!-- content  -->
    <main class="min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <RouterView />
      </div>
    </main>
    <div class="relative">
      <div class="fixed bottom-10 right-4 z-10">
        <AppQuickAcess
          :showExplore="showExplore"
          @update:app-quickaccess="canExplore"
        >
          <template #items>
            <div v-for="app in items" :key="`app-key${app.name}`">
              <SidebarItem :nav="app" />
            </div>
          </template>
        </AppQuickAcess>
      </div>
    </div>
  </div>
</template>
