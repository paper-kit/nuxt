<template>
  <div
    class="pu-grid-item font-patrick"
    :class="[itemClass, customClass]"
    :style="itemStyles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    colStart?: number
    colEnd?: number
    rowStart?: number
    rowEnd?: number
    colSpan?: number
    rowSpan?: number
    alignment?: 'start' | 'center' | 'end' | 'stretch'
    justify?: 'start' | 'center' | 'end' | 'stretch'
    customClass?: string
  }>(),
  {
    colStart: undefined,
    colEnd: undefined,
    rowStart: undefined,
    rowEnd: undefined,
    colSpan: undefined,
    rowSpan: undefined,
    alignment: 'stretch',
    justify: 'stretch',
    customClass: '',
  },
)

const itemClass = computed(() => [
  'pu-grid-item',
  `pu-grid-item--align-${props.alignment}`,
  `pu-grid-item--justify-${props.justify}`,
])

const itemStyles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.colStart) {
    styles['grid-column-start'] = props.colStart.toString()
  }
  if (props.colEnd) {
    styles['grid-column-end'] = props.colEnd.toString()
  }
  if (props.rowStart) {
    styles['grid-row-start'] = props.rowStart.toString()
  }
  if (props.rowEnd) {
    styles['grid-row-end'] = props.rowEnd.toString()
  }

  if (props.colSpan) {
    styles['grid-column'] = `span ${props.colSpan}`
  }
  if (props.rowSpan) {
    styles['grid-row'] = `span ${props.rowSpan}`
  }

  return styles
})
</script>

<style lang="css" scoped>
.pu-grid-item {
  @apply relative p-4 bg-white dark:bg-primary-light-600 rounded-lg border border-gray-200 dark:border-primary-light-400;
  /* Estilo hand-drawn */
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

/* Bordas hand-drawn */
.pu-grid-item::before {
  content: '';
  @apply absolute inset-0 pointer-events-none;
  border: 2px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(28, 28, 28, 0.1) 50%,
      transparent 70%);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  mask-composite: xor;
}

/* Cantos irregulares */
.pu-grid-item::after {
  content: '';
  @apply absolute top-0 right-0 w-3 h-3 pointer-events-none;
  background:
    radial-gradient(circle at 0 0, transparent 60%, rgba(28, 28, 28, 0.1) 100%);
  border-radius: 0 12px 0 0;
}

/* Alignment */
.pu-grid-item--align-start {
  align-self: start;
}

.pu-grid-item--align-center {
  align-self: center;
}

.pu-grid-item--align-end {
  align-self: end;
}

.pu-grid-item--align-stretch {
  align-self: stretch;
}

/* Justify */
.pu-grid-item--justify-start {
  justify-self: start;
}

.pu-grid-item--justify-center {
  justify-self: center;
}

.pu-grid-item--justify-end {
  justify-self: end;
}

.pu-grid-item--justify-stretch {
  justify-self: stretch;
}

/* Hover effects */
.pu-grid-item:hover {
  @apply transform scale-[1.02] shadow-lg;
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.15),
    0 2px 4px rgba(28, 28, 28, 0.1);
  filter: drop-shadow(0 4px 8px rgba(28, 28, 28, 0.1));
}

/* Animações de entrada */
.pu-grid-item {
  animation: gridItemEnter 0.4s ease-out;
}

@keyframes gridItemEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Dark mode */
.dark .pu-grid-item {
  @apply bg-primary-light-600 border-primary-light-400;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .pu-grid-item::after {
  background:
    radial-gradient(circle at 0 0, transparent 60%, rgba(193, 193, 193, 0.1) 100%);
}

.dark .pu-grid-item:hover {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

/* Responsive padding */
@media (max-width: 640px) {
  .pu-grid-item {
    @apply p-3;
  }
}

@media (min-width: 1024px) {
  .pu-grid-item {
    @apply p-6;
  }
}
</style>
