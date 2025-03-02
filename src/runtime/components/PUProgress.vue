<template>
  <div class="flex justify-center items-center">
    <!-- Modo Radial -->
    <svg
      v-if="mode === 'radial'"
      :width="sizeMap.radial"
      :height="sizeMap.radial"
      viewBox="0 0 100 100"
      class="transform -rotate-90"
    >
      <circle
        class="text-gray-300 stroke-current"
        cx="50"
        cy="50"
        r="45"
        stroke-width="10"
        fill="none"
      />
      <circle
        class="text-primary-light-500 stroke-current transition-all duration-300"
        cx="50"
        cy="50"
        r="45"
        stroke-width="10"
        fill="none"
        stroke-dasharray="283"
        :stroke-dashoffset="dashOffset"
      />
    </svg>

    <div
      v-else-if="mode === 'horizontal'"
      class="w-full bg-gray-200 rounded-lg overflow-hidden"
      :style="{ height: sizeMap.horizontal + 'px' }"
    >
      <div
        class="h-full bg-primary-light-500 transition-all duration-300"
        :style="{ width: `${progress}%` }"
      />
    </div>

    <div
      v-else
      class="bg-gray-200 rounded-lg overflow-hidden rotate-180"
      :style="{ width: sizeMap.vertical + 'px', height: '100px' }"
    >
      <div
        class="bg-primary-light-500 transition-all duration-300"
        :style="{ height: `${progress}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  mode: "radial" | "horizontal" | "vertical";
  progress: number;
  size: "small" | "medium" | "large";
}>();

const sizeMap = computed(() => {
  const sizes = {
    small: { horizontal: 8, vertical: 10, radial: 40 },
    medium: { horizontal: 12, vertical: 15, radial: 60 },
    large: { horizontal: 16, vertical: 20, radial: 80 },
  };
  return sizes[props.size];
});

const circumference = 283;
const dashOffset = computed(
  () => circumference - (props.progress / 100) * circumference,
);
</script>
