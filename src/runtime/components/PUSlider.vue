<template>
  <div
    class="pu-slider font-patrick"
    :class="[sliderClass, customClass]"
  >
    <div class="pu-slider__container">
      <div
        ref="trackRef"
        class="pu-slider__track"
        @click="handleTrackClick"
      >
        <div
          class="pu-slider__track-fill"
          :style="trackFillStyle"
        />
      </div>

      <div
        ref="thumbRef"
        class="pu-slider__thumb"
        :style="thumbStyle"
        @mousedown="startDragging"
        @touchstart="startDragging"
      >
        <div class="pu-slider__thumb-inner" />
      </div>

      <div
        v-if="showMarkers"
        class="pu-slider__markers"
      >
        <div
          v-for="marker in markers"
          :key="marker"
          class="pu-slider__marker"
          :style="{ left: `${((marker - min) / (max - min)) * 100}%` }"
        >
          <div class="pu-slider__marker-dot" />
          <div class="pu-slider__marker-label">
            {{ marker }}
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showLabels"
      class="pu-slider__labels"
    >
      <span class="pu-slider__label">{{ min }}</span>
      <span class="pu-slider__label">{{ max }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    min?: number
    max?: number
    step?: number
    orientation?: 'horizontal' | 'vertical'
    showMarkers?: boolean
    showLabels?: boolean
    disabled?: boolean
    customClass?: string
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    showMarkers: false,
    showLabels: false,
    disabled: false,
    customClass: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
}>()

const trackRef = ref<HTMLElement>()
const thumbRef = ref<HTMLElement>()
const isDragging = ref(false)

const sliderClass = computed(() => [
  'pu-slider',
  `pu-slider--${props.orientation}`,
  {
    'pu-slider--disabled': props.disabled,
  },
])

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

const trackFillStyle = computed(() => ({
  width: `${percentage.value}%`,
}))

const thumbStyle = computed(() => ({
  left: `${percentage.value}%`,
}))

const markers = computed(() => {
  const steps = []
  for (let i = props.min; i <= props.max; i += props.step) {
    steps.push(i)
  }
  return steps
})

const startDragging = (event: MouseEvent | TouchEvent) => {
  if (props.disabled) return

  isDragging.value = true
  document.addEventListener('mousemove', handleDragging)
  document.addEventListener('mouseup', stopDragging)
  document.addEventListener('touchmove', handleDragging)
  document.addEventListener('touchend', stopDragging)

  event.preventDefault()
}

const handleDragging = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !trackRef.value) return

  const rect = trackRef.value.getBoundingClientRect()
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

  let percentage = 0

  if (props.orientation === 'horizontal') {
    percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  }
  else {
    percentage = Math.max(0, Math.min(1, (rect.bottom - clientY) / rect.height))
  }

  const value = props.min + (percentage * (props.max - props.min))
  const steppedValue = Math.round(value / props.step) * props.step

  emit('update:modelValue', steppedValue)
  emit('change', steppedValue)
}

const stopDragging = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleDragging)
  document.removeEventListener('mouseup', stopDragging)
  document.removeEventListener('touchmove', handleDragging)
  document.removeEventListener('touchend', stopDragging)
}

const handleTrackClick = (event: MouseEvent) => {
  if (props.disabled) return

  const rect = trackRef.value?.getBoundingClientRect()
  if (!rect) return

  const percentage = (event.clientX - rect.left) / rect.width
  const value = props.min + (percentage * (props.max - props.min))
  const steppedValue = Math.round(value / props.step) * props.step

  emit('update:modelValue', steppedValue)
  emit('change', steppedValue)
}

onUnmounted(() => {
  stopDragging()
})
</script>

<style lang="css" scoped>
.pu-slider {
  @apply relative w-full;
}

.pu-slider__container {
  @apply relative;
}


.pu-slider__track {
  @apply relative bg-gray-200 dark:bg-primary-light-400 rounded-full cursor-pointer;
  height: 8px;
}

.pu-slider__track-fill {
  @apply absolute top-0 left-0 bg-primary-light-500 dark:bg-primary-light-50 rounded-full;
  height: 100%;
  transition: width 0.1s ease-out;
}


.pu-slider__thumb {
  @apply absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer;
  width: 20px;
  height: 20px;
}

.pu-slider__thumb-inner {
  @apply w-full h-full bg-white dark:bg-primary-light-600 rounded-full border-2 border-primary-light-500 dark:border-primary-light-50;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
  transition: all 0.1s ease-out;
}

.pu-slider__thumb:hover .pu-slider__thumb-inner {
  @apply transform scale-110;
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.15),
    0 2px 4px rgba(28, 28, 28, 0.1);
}


.pu-slider__markers {
  @apply absolute top-0 left-0 w-full h-full pointer-events-none;
}

.pu-slider__marker {
  @apply absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2;
}

.pu-slider__marker-dot {
  @apply w-2 h-2 bg-gray-400 dark:bg-primary-light-300 rounded-full;
}

.pu-slider__marker-label {
  @apply absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-primary-light-300;
}


.pu-slider__labels {
  @apply flex justify-between mt-2 text-sm text-gray-500 dark:text-primary-light-300;
}

.pu-slider__label {
  @apply font-medium;
}


.pu-slider--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.pu-slider--disabled .pu-slider__track {
  @apply cursor-not-allowed;
}

.pu-slider--disabled .pu-slider__thumb {
  @apply cursor-not-allowed;
}


.pu-slider__track {
  box-shadow:
    inset 0 1px 2px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-slider__track::before {
  content: '';
  @apply absolute inset-0 rounded-full;
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(28, 28, 28, 0.05) 50%,
      transparent 70%);
}

.dark .pu-slider__track {
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 0, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .pu-slider__track::before {
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(193, 193, 193, 0.05) 50%,
      transparent 70%);
}


.pu-slider--vertical {
  @apply w-8 h-full;
}

.pu-slider--vertical .pu-slider__track {
  @apply w-8 h-full;
  height: 100%;
  width: 8px;
}

.pu-slider--vertical .pu-slider__track-fill {
  @apply w-full bottom-0;
  width: 100%;
  height: 0%;
  transition: height 0.1s ease-out;
}

.pu-slider--vertical .pu-slider__thumb {
  @apply left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  left: 50%;
}

.pu-slider--vertical .pu-slider__labels {
  @apply flex-col justify-between mt-0 ml-2;
}


@media (max-width: 640px) {
  .pu-slider__thumb {
    width: 24px;
    height: 24px;
  }

  .pu-slider__track {
    height: 10px;
  }
}
</style>
