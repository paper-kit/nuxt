<template>
  <div
    class="pu-grid font-patrick"
    :class="[gridClass, customClass]"
    :style="gridStyles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    cols?: number | string
    rows?: number | string
    gap?: 'none' | 'small' | 'medium' | 'large'
    alignment?: 'start' | 'center' | 'end' | 'stretch'
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
    responsive?: boolean
    customClass?: string
  }>(),
  {
    cols: 1,
    rows: 'auto',
    gap: 'medium',
    alignment: 'stretch',
    justify: 'start',
    responsive: true,
    customClass: '',
  },
)

const gridClass = computed(() => [
  'pu-grid',
  `pu-grid--gap-${props.gap}`,
  `pu-grid--align-${props.alignment}`,
  `pu-grid--justify-${props.justify}`,
  {
    'pu-grid--responsive': props.responsive,
  },
])

const gridStyles = computed(() => {
  const styles: Record<string, string> = {
    display: 'grid',
  }

  // Definir colunas
  if (typeof props.cols === 'number') {
    styles['grid-template-columns'] = `repeat(${props.cols}, 1fr)`
  } else {
    styles['grid-template-columns'] = props.cols
  }

  // Definir linhas
  if (typeof props.rows === 'number') {
    styles['grid-template-rows'] = `repeat(${props.rows}, 1fr)`
  } else {
    styles['grid-template-rows'] = props.rows
  }

  return styles
})
</script>

<style lang="css" scoped>
.pu-grid {
  @apply relative;
  /* Estilo hand-drawn para o container */
  background:
    radial-gradient(circle at 20% 20%, rgba(28, 28, 28, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(28, 28, 28, 0.05) 0%, transparent 50%);
}

.pu-grid::before {
  content: '';
  @apply absolute inset-0 pointer-events-none;
  background-image:
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23e8e8e8' stroke-width='0.5' stroke-dasharray='2,2'/%3E%3C/svg%3E");
  opacity: 0.3;
  z-index: -1;
}

/* Gaps */
.pu-grid--gap-none {
  gap: 0;
}

.pu-grid--gap-small {
  gap: 0.5rem;
}

.pu-grid--gap-medium {
  gap: 1rem;
}

.pu-grid--gap-large {
  gap: 2rem;
}

/* Alignment */
.pu-grid--align-start {
  align-items: start;
}

.pu-grid--align-center {
  align-items: center;
}

.pu-grid--align-end {
  align-items: end;
}

.pu-grid--align-stretch {
  align-items: stretch;
}

/* Justify */
.pu-grid--justify-start {
  justify-items: start;
}

.pu-grid--justify-center {
  justify-items: center;
}

.pu-grid--justify-end {
  justify-items: end;
}

.pu-grid--justify-space-between {
  justify-content: space-between;
}

.pu-grid--justify-space-around {
  justify-content: space-around;
}

.pu-grid--justify-space-evenly {
  justify-content: space-evenly;
}

/* Responsive */
.pu-grid--responsive {
  @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6;
}

/* Dark mode */
.dark .pu-grid::before {
  background-image:
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23464646' stroke-width='0.5' stroke-dasharray='2,2'/%3E%3C/svg%3E");
}

/* Hover effect para elementos filhos */
.pu-grid > * {
  @apply transition-all duration-200 ease-in-out;
}

.pu-grid > *:hover {
  @apply transform scale-[1.02] shadow-lg;
  filter: drop-shadow(0 4px 8px rgba(28, 28, 28, 0.1));
}

/* Dark mode hover effects */
.dark .pu-grid > *:hover {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

/* Animações de entrada */
.pu-grid > * {
  animation: gridItemEnter 0.3s ease-out;
}

@keyframes gridItemEnter {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Estilo hand-drawn para bordas dos elementos filhos */
.pu-grid > * {
  @apply relative;
}

.pu-grid > *::before {
  content: '';
  @apply absolute inset-0 pointer-events-none;
  border: 1px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(45deg, transparent 30%, rgba(28, 28, 28, 0.1) 50%, transparent 70%);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  mask-composite: xor;
}
</style>
