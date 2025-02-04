<template>
  <div>
    <div class="pu-tooltip font-patrick">
      <slot />
      <div
        v-for="position in positions"
        :key="position"
        class="tooltip-arrow"
        :class="positionClass[position]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type Position = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom'

defineProps<{
  positions: Position[]
}>()

const positionClass = ref({
  'top': 'top-[-11px] left-1/2 -translate-x-1/2 rotate-[-135deg]',
  'top-left': 'top-[-11px] left-[25%] -translate-x-[25%] rotate-[-135deg]',
  'top-right': 'top-[-11px] left-[75%] -translate-x-[75%] rotate-[-135deg]',

  'bottom': 'bottom-[-10px] left-1/2 -translate-x-1/2 rotate-45',
  'bottom-left': 'bottom-[-10px] left-[25%] -translate-x-[25%] rotate-45',
  'bottom-right': 'bottom-[-10px] left-[75%] -translate-x-[75%] rotate-45',

  'left': 'left-[-11px] top-1/2 -translate-y-1/2 rotate-[135deg]',
  'left-top': 'left-[-11px] top-[25%] -translate-y-[25%] rotate-[135deg]',
  'left-bottom': 'left-[-11px] top-[75%] -translate-y-[75%] rotate-[135deg]',

  'right': '-right-[11px] top-1/2 -translate-y-1/2 rotate-[-45deg]',
  'right-top': '-right-[11px] top-[25%] -translate-y-[25%] rotate-[-45deg]',
  'right-bottom': '-right-[11px] top-[75%] -translate-y-[75%] rotate-[-45deg]',
})
</script>

<style scoped>
.pu-tooltip {
  @apply relative border-2 border-primary-light-500 bg-white rounded-lg text-center p-6 w-full h-full shadow-lg shadow-black/20;
}

.tooltip-arrow {
  @apply absolute  w-6 h-6 bg-white transform  z-10 rounded-sm;
  border: 2px solid black;
  border-color: inherit;
}

.tooltip-arrow::before {
  content: '';
  @apply absolute -mt-[22px] -ml-[22px] w-[39px] h-[39px] transform rotate-[135deg] bg-white ;
  inset: 0;
  clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
  z-index: 1;
}
</style>
