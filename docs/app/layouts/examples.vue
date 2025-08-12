<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-screen flex flex-col w-full">
    <HeaderUi />
    <div class="flex-1 overflow-y-auto w-full">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script> 