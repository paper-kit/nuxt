<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  ariaLabel?: string
  ariaLabelledby?: string
  withDarkMode?: boolean
  withIcon?: boolean
}>()

const sliderValue = ref(50)

const updateSlider = (event: Event) => {
  sliderValue.value = (event.target as HTMLInputElement).valueAsNumber
}
</script>

<template>
  <div
    class="relative w-full max-w-lg border-2 border-primary-light-500 rounded-lg shadow-lg overflow-hidden"
    :aria-labelledby="ariaLabelledby"
    :aria-label="ariaLabel"
  >
    <div
      v-if="withDarkMode"
      class="absolute -z-20 inset-0 flex items-center justify-center pointer-events-none bg-white dark:bg-primary-light-500"
    >
      <div
        class="absolute top-1 right-1 text-primary-light-500 font-patrick"
      >
        <PUIcon name="brightness" />
      </div>
      <slot />
    </div>

    <div
      v-if="withDarkMode"
      class="absolute -z-20 inset-0 flex items-center justify-center overflow-hidden  "
      :class="{ 'dark bg-primary-light-500': withDarkMode }"
      :style="{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }"
    >
      <div
        class="absolute top-1 left-1 text-white font-patrick"
      >
        <PUIcon name="moon" />
      </div>
      <slot />
    </div>

    <div
      v-if="!withDarkMode"
      class="absolute -z-20 inset-0 flex items-center justify-center pointer-events-none bg-white dark:bg-primary-light-500"
    >
      <slot name="right" />
    </div>

    <div
      v-if="!withDarkMode"
      class="absolute -z-20 inset-0 flex items-center justify-center overflow-hidden bg-white"
      :style="{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }"
    >
      <slot name="left" />
    </div>

    <input
      v-model="sliderValue"
      type="range"
      min="0"
      max="100"
      class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      @input="updateSlider"
    >

    <div
      class="absolute top-0 bottom-0 border border-primary-light-500"
      :style="{ left: sliderValue + '%' }"
    >
      <div
        v-if="withIcon"
        class="absolute -z-10 top-1/2 text-xs -translate-y-1/2 -translate-x-1/2 rounded-full  bg-slate-500/20 border border-slate-500/80 text-slate-500  flex items-center gap-1 shadow-md"
      >
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
