<template>
  <div class="pu-label font-patrick">
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ id: string }>()
</script>

<style scoped>
.pu-label {
  @apply text-primary-light-500 text-base uppercase w-full;
}
</style>
