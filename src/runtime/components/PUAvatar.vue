<template>
  <div
    :class="['flex items-center justify-center overflow-hidden', sizeClass, shapeClass]"
  >
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="w-full h-full object-cover"
    >
    <div
      v-else
      class="w-16 h-16 rounded-lg flex justify-center items-center object-cover"
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="72"
          height="72"
          rx="2"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.7334 72H2.2666C7.37405 58.332 20.5505 48.6 36 48.6C51.4495 48.6 64.626 58.332 69.7334 72ZM49.5 32.4C49.5 40.3529 43.4559 46.8 36 46.8C28.5442 46.8 22.5 40.3529 22.5 32.4C22.5 24.4471 28.5442 18 36 18C43.4559 18 49.5 24.4471 49.5 32.4Z"
          fill="#1B1B1B"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  shape?: 'circular' | 'rounded' | 'square'
  src?: string
}>()

const sizeClass = computed(() => {
  const sizes = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24',
  }
  return sizes[props.size || 'medium']
})

const shapeClass = computed(() => {
  const shapes = {
    circular: 'rounded-full',
    rounded: 'rounded-lg',
    square: 'rounded-none',
  }
  return shapes[props.shape || 'circular']
})
</script>

<style scoped>
div {
  border: 2px solid black;
}
</style>
