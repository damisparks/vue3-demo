<script setup lang="ts">
import AppSidebar from '@/components/ui/easypractice/AppSidebar.vue'
import SidebarListItem from '@/components/ui/easypractice/SidebarListItem.vue'
import TopNav from '@/components/ui/easypractice/TopNav.vue'

const showSidebar = ref(true)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}
</script>

<template>
  <div class="flex flex-col">
    <TopNav @toggle-sidebar="toggleSidebar" />
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
  </div>
</template>
