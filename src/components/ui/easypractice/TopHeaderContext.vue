<template>
  <div class="sm:flex sm:items-center">
    <header class="sm:flex-auto">
      <slot name="ctxleft"></slot>
    </header>
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <slot name="ctxright"></slot>
    </div>
  </div>
</template>
