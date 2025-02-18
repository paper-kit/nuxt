<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  ariaLabel?: string
  ariaLabelledby?: string
}>()

const sliderValue = ref(50)

const updateSlider = (event: Event) => {
  sliderValue.value = (event.target as HTMLInputElement).valueAsNumber
}
</script>

<template>
  <div
    class="relative w-full max-w-lg border-2 border-primary-light-500 rounded-lg shadow-lg p-4 overflow-hidden"
    :aria-labelledby="ariaLabelledby"
    :aria-label="ariaLabel"
  >
    <!-- Left Side (Fixo) -->
    <div class="absolute inset-0">
      <slot name="left" />
    </div>

    <!-- Right Side (Cortado pelo slider) -->
    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ width: sliderValue + '%' }"
    >
      <slot name="right" />
    </div>

    <!-- Slider -->
    <input
      v-model="sliderValue"
      type="range"
      min="0"
      max="100"
      class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      @input="updateSlider"
    >

    <!-- Linha do Slider -->
    <div
      class="absolute top-0 bottom-0 border border-primary-light-500"
      :style="{ left: sliderValue + '%' }"
    >
      <div class="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-primary-light-500 flex justify-between">
        <PUIcon name="chevron-left" />
        <PUIcon name="chevron-right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"] {
  @apply absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize;
}
</style>
