<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="main h-screen flex justify-center"
    :style="{ background: route.path == '/' ? 'url(/bg.svg) no-repeat' : '' }"
  >
    <div class="container h-full text-xl">
      <HeaderUi />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { _backgroundImage } from "#tailwind-config/theme";

const route = useRoute();
</script>

<style>
.main {
  background-size: cover;
}
</style>
