<template>
  <div
    class="main h-screen w-screen flex justify-center"
    :style="{ background: route.path === '/' ? 'url(/bg.svg) no-repeat' : '' }"
  >
    <div class="container h-full text-xl">
      <HeaderUi />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style>
.main {
  background-size: cover;
}
</style>
