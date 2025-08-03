<template>
  <div
    class="pu-loading font-patrick"
    :class="[loadingClass, customClass]"
  >
    <div
      v-if="type === 'circular'"
      class="pu-loading__circular"
    >
      <svg
        class="pu-loading__spinner"
        viewBox="0 0 50 50"
      >
        <circle
          class="pu-loading__spinner-track"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="3"
        />
        <circle
          class="pu-loading__spinner-indicator"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="3"
        />
      </svg>
    </div>

    <div
      v-if="type === 'dots'"
      class="pu-loading__dots"
    >
      <div class="pu-loading__dot" />
      <div class="pu-loading__dot" />
      <div class="pu-loading__dot" />
    </div>

    <div
      v-if="type === 'skeleton'"
      class="pu-loading__skeleton"
    >
      <div class="pu-loading__skeleton-line" />
      <div class="pu-loading__skeleton-line" />
      <div class="pu-loading__skeleton-line" />
    </div>

    <div
      v-if="text"
      class="pu-loading__text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'circular' | 'dots' | 'skeleton'
    size?: 'small' | 'medium' | 'large'
    text?: string
    customClass?: string
  }>(),
  {
    type: 'circular',
    size: 'medium',
    text: '',
    customClass: '',
  },
)

const loadingClass = computed(() => [
  'pu-loading',
  `pu-loading--${props.type}`,
  `pu-loading--${props.size}`,
])
</script>

<style lang="css" scoped>
.pu-loading {
  @apply flex flex-col items-center justify-center;
}


.pu-loading__circular {
  @apply relative;
}

.pu-loading__spinner {
  @apply animate-spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.pu-loading__spinner-track {
  @apply stroke-gray-200 dark:stroke-primary-light-400;
}

.pu-loading__spinner-indicator {
  @apply stroke-primary-light-500 dark:stroke-primary-light-50;
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: spinner-dash 1.5s ease-in-out infinite;
}

@keyframes spinner-dash {
  0% {
    stroke-dashoffset: 80;
  }
  50% {
    stroke-dashoffset: 20;
  }
  100% {
    stroke-dashoffset: 80;
  }
}


.pu-loading__dots {
  @apply flex gap-2;
}

.pu-loading__dot {
  @apply w-2 h-2 bg-primary-light-500 dark:bg-primary-light-50 rounded-full;
  animation: dots-bounce 1.4s ease-in-out infinite both;
}

.pu-loading__dot:nth-child(1) {
  animation-delay: -0.32s;
}

.pu-loading__dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes dots-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}


.pu-loading__skeleton {
  @apply space-y-2 w-full;
}

.pu-loading__skeleton-line {
  @apply h-4 bg-gray-200 dark:bg-primary-light-400 rounded;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

.pu-loading__skeleton-line:nth-child(1) {
  @apply w-3/4;
}

.pu-loading__skeleton-line:nth-child(2) {
  @apply w-full;
}

.pu-loading__skeleton-line:nth-child(3) {
  @apply w-1/2;
}

@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


.pu-loading__text {
  @apply mt-2 text-sm text-gray-600 dark:text-primary-light-300;
}


.pu-loading--small .pu-loading__spinner {
  @apply w-6 h-6;
}

.pu-loading--small .pu-loading__dot {
  @apply w-1.5 h-1.5;
}

.pu-loading--small .pu-loading__skeleton-line {
  @apply h-3;
}

.pu-loading--medium .pu-loading__spinner {
  @apply w-8 h-8;
}

.pu-loading--medium .pu-loading__dot {
  @apply w-2 h-2;
}

.pu-loading--medium .pu-loading__skeleton-line {
  @apply h-4;
}

.pu-loading--large .pu-loading__spinner {
  @apply w-12 h-12;
}

.pu-loading--large .pu-loading__dot {
  @apply w-3 h-3;
}

.pu-loading--large .pu-loading__skeleton-line {
  @apply h-6;
}


.pu-loading__spinner {
  filter: drop-shadow(0 2px 4px rgba(28, 28, 28, 0.1));
}

.pu-loading__dot {
  box-shadow: 0 2px 4px rgba(28, 28, 28, 0.1);
}

.pu-loading__skeleton-line {
  box-shadow: 0 1px 2px rgba(28, 28, 28, 0.05);
}

.dark .pu-loading__spinner {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.dark .pu-loading__dot {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dark .pu-loading__skeleton-line {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
