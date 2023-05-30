<template>
  <TopHeaderContext>
    <template #ctxleft>
      <div class="space-y-3">
        <HeaderTitle>Appointments</HeaderTitle>
        <p class="text-zinc-500">List of your appointments</p>
      </div>
    </template>
    <template #ctxright>
      <button class="btn-main capitalize w-full sm:w-fit">
        create appointment
      </button>
    </template>
  </TopHeaderContext>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
