<template>
  <TopHeaderContext>
    <template #ctxleft>
      <div class="space-y-3">
        <HeaderTitle>Clients</HeaderTitle>
        <p class="text-zinc-500">List of your clients</p>
      </div>
    </template>
    <template #ctxright>
      <button class="btn-main capitalize w-full sm:w-fit">Add client</button>
    </template>
  </TopHeaderContext>
</template>

<route lang="yaml">
meta:
  layout: easypractice
</route>
