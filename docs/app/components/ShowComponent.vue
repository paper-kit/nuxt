<template>
  <div
    :class="{
      dark: isDarkMode,
    }"
    class="border-2 border-primary-light-500 rounded-lg w-72 h-48 hover:scale-110 transition-all duration-300 relative"
  >
    <div class="absolute top-2 right-2 cursor-pointer dark:text-primary-light-50">
      <PUIcon
        name="brightness"
        @click="toogleDarkMode"
      />
    </div>
    <div class="component-example p-4 flex justify-center items-center h-36 dark:bg-primary-light-500">
      <slot name="component" />
    </div>
    <div class="component-name text-lg font-bold flex h-12 gap-4 justify-center items-center w-full border-t-2 border-primary-light-500">
      <PUIcon
        v-if="isNew"
        name="star-solid"
      />
      <slot name="component-name" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isNew?: boolean
}>()

const isDarkMode = ref(false)

const toogleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>
