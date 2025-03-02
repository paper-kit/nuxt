<template>
  <div class="pu-tag font-patrick">
    <div class="pu-tag--default">
      <span>{{ label }}</span>
      <PUIcon v-if="icon" :name="icon" class="cursor-pointer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string;
  icon?: string;
}>();
</script>

<style scoped>
.pu-tag--default {
  @apply w-fit px-2 text-sm py-1 rounded-lg flex justify-between gap-2 items-center border-2 border-primary-light-500 bg-primary-dark-50;
}
</style>
