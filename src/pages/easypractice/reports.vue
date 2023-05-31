<template>
  <TopHeaderContext>
    <template #ctxleft>
      <div class="space-y-3">
        <HeaderTitle>Reports</HeaderTitle>
        <p class="text-zinc-500">List of your reports</p>
      </div>
    </template>
    <template #ctxright>
      <button class="btn-main capitalize w-full sm:w-fit">
        request for report
      </button>
    </template>
  </TopHeaderContext>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
