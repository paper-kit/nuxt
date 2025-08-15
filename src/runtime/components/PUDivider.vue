<template>
  <div
    class="pu-divider font-patrick"
    :class="[dividerClass, customClass]"
  >
    <div
      v-if="text"
      class="pu-divider__text"
    >
      {{ text }}
    </div>
    <div
      v-else
      class="pu-divider__line"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  orientation?: 'horizontal' | 'vertical'
  dividerStyle?: 'solid' | 'dashed' | 'dotted' | 'wavy'
  text?: string
  size?: 'small' | 'medium' | 'large'
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  dividerStyle: 'solid',
  text: '',
  size: 'medium',
  customClass: '',
})

const dividerClass = computed(() => {
  const validStyles = ['solid', 'dashed', 'dotted', 'wavy']
  const validOrientations = ['horizontal', 'vertical']
  const validSizes = ['small', 'medium', 'large']

  const style = typeof props.dividerStyle === 'string' && validStyles.includes(props.dividerStyle) ? props.dividerStyle : 'solid'
  const orientation = typeof props.orientation === 'string' && validOrientations.includes(props.orientation) ? props.orientation : 'horizontal'
  const size = typeof props.size === 'string' && validSizes.includes(props.size) ? props.size : 'medium'

  return [
    'pu-divider',
    `pu-divider--${orientation}`,
    `pu-divider--${style}`,
    `pu-divider--${size}`,
  ]
})
</script>

<style lang="css" scoped>
.pu-divider {
  @apply relative flex items-center;
}

.pu-divider--horizontal {
  @apply w-full my-4;
}

.pu-divider--horizontal .pu-divider__line {
  @apply flex-1 h-px bg-gray-300 dark:bg-primary-light-400;
  background-image:
    repeating-linear-gradient(
      90deg,
      currentColor 0,
      currentColor 2px,
      transparent 2px,
      transparent 4px
    );
}

.pu-divider--vertical {
  @apply h-full mx-4 w-px;
}

.pu-divider--vertical .pu-divider__line {
  @apply w-px h-full bg-gray-300 dark:bg-primary-light-400;
  background-image:
    repeating-linear-gradient(
      180deg,
      currentColor 0,
      currentColor 2px,
      transparent 2px,
      transparent 4px
    );
}

.pu-divider--solid .pu-divider__line {
  background-image: none;
}

.pu-divider--dashed .pu-divider__line {
  background-image:
    repeating-linear-gradient(
      90deg,
      currentColor 0,
      currentColor 4px,
      transparent 4px,
      transparent 8px
    );
}

.pu-divider--dotted .pu-divider__line {
  background-image:
    repeating-linear-gradient(
      90deg,
      currentColor 0,
      currentColor 1px,
      transparent 1px,
      transparent 3px
    );
}

.pu-divider--wavy .pu-divider__line {
  background-image:
    repeating-linear-gradient(
      90deg,
      currentColor 0,
      currentColor 2px,
      transparent 2px,
      transparent 6px
    );
  filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'%3E%3Cpath d='M0,1 Q2.5,0 5,1 T10,1' stroke='currentColor' fill='none' stroke-width='1'/%3E%3C/svg%3E");
}

.pu-divider--vertical.pu-divider--dashed .pu-divider__line {
  background-image:
    repeating-linear-gradient(
      180deg,
      currentColor 0,
      currentColor 4px,
      transparent 4px,
      transparent 8px
    );
}

.pu-divider--vertical.pu-divider--dotted .pu-divider__line {
  background-image:
    repeating-linear-gradient(
      180deg,
      currentColor 0,
      currentColor 1px,
      transparent 1px,
      transparent 3px
    );
}

.pu-divider--vertical.pu-divider--wavy .pu-divider__line {
  background-image:
    repeating-linear-gradient(
      180deg,
      currentColor 0,
      currentColor 2px,
      transparent 2px,
      transparent 6px
    );
}

.pu-divider__text {
  @apply px-4 text-sm text-gray-500 dark:text-primary-light-300 font-medium;
  background:
    radial-gradient(circle at center,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 60%,
      transparent 100%);
}

.dark .pu-divider__text {
  background:
    radial-gradient(circle at center,
      rgba(28, 28, 28, 0.9) 0%,
      rgba(28, 28, 28, 0.9) 60%,
      transparent 100%);
}

.pu-divider__line {
  @apply flex-1;
}

.pu-divider--small .pu-divider__line {
  height: 1px;
}

.pu-divider--medium .pu-divider__line {
  height: 2px;
}

.pu-divider--large .pu-divider__line {
  height: 3px;
}

.pu-divider--vertical.pu-divider--small .pu-divider__line {
  width: 1px;
  height: 100%;
}

.pu-divider--vertical.pu-divider--medium .pu-divider__line {
  width: 2px;
  height: 100%;
}

.pu-divider--vertical.pu-divider--large .pu-divider__line {
  width: 3px;
  height: 100%;
}

.pu-divider__line {
  position: relative;
}

.pu-divider__line::after {
  content: '';
  @apply absolute inset-0 pointer-events-none;
  background:
    radial-gradient(circle at 20% 50%, rgba(28, 28, 28, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(28, 28, 28, 0.1) 0%, transparent 50%);
}

.dark .pu-divider__line::after {
  background:
    radial-gradient(circle at 20% 50%, rgba(193, 193, 193, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(193, 193, 193, 0.1) 0%, transparent 50%);
}
</style>
