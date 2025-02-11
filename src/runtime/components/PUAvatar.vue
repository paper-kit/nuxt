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
      class="bg-gray-300 flex items-center justify-center w-full h-full text-primary-light-500"
    >
      <span class="text-xl">👤</span>
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
