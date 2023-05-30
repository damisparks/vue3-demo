<template>
  <TopHeaderContext>
    <template #ctxleft>
      <div class="space-y-3">
        <HeaderTitle>Calendar</HeaderTitle>
        <p class="text-zinc-500">List of your calendar events</p>
      </div>
    </template>
    <template #ctxright>
      <button class="btn-main capitalize w-full sm:w-fit">
        schedule an event
      </button>
    </template>
  </TopHeaderContext>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
