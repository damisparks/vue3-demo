<template>
  <TopHeaderContext>
    <template #ctxleft>
      <div class="space-y-3">
        <HeaderTitle>Treatments</HeaderTitle>
        <p class="text-zinc-500">List of your treatment</p>
      </div>
    </template>
    <template #ctxright>
      <button class="btn-main capitalize w-full sm:w-fit">
        request for treatment
      </button>
    </template>
  </TopHeaderContext>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
