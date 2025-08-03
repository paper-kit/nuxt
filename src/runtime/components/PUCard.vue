<template>
  <div
    class="pu-card font-patrick"
    :class="[cardClass, customClass]"
  >
    <div
      v-if="image"
      class="pu-card__image"
    >
      <img
        :src="image"
        :alt="imageAlt"
        class="w-full h-full object-cover"
      >
    </div>

    <div class="pu-card__content">
      <slot />
    </div>

    <div
      v-if="$slots.actions"
      class="pu-card__actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'simple' | 'image' | 'actions'
    size?: 'small' | 'medium' | 'large'
    image?: string
    imageAlt?: string
    customClass?: string
  }>(),
  {
    variant: 'simple',
    size: 'medium',
    image: '',
    imageAlt: '',
    customClass: '',
  },
)

const cardClass = computed(() => [
  'pu-card',
  `pu-card--${props.variant}`,
  `pu-card--${props.size}`,
])
</script>

<style lang="css" scoped>
.pu-card {
  @apply relative bg-white dark:bg-primary-light-600 rounded-lg border border-gray-200 dark:border-primary-light-400 overflow-hidden;
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.1),
    0 2px 4px rgba(28, 28, 28, 0.05);
}

.pu-card::before {
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

.pu-card::after {
  content: '';
  @apply absolute top-0 right-0 w-4 h-4 pointer-events-none;
  background:
    radial-gradient(circle at 0 0, transparent 60%, rgba(28, 28, 28, 0.1) 100%);
  border-radius: 0 12px 0 0;
}

.pu-card__image {
  @apply relative overflow-hidden;
  border-radius: 12px 12px 0 0;
}

.pu-card__image::before {
  content: '';
  @apply absolute inset-0 pointer-events-none;
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(28, 28, 28, 0.05) 50%,
      transparent 70%);
}

.pu-card__content {
  @apply p-4;
}

.pu-card__actions {
  @apply p-4 pt-0 flex gap-2 justify-end;
}

.pu-card--simple {
  @apply p-4;
}

.pu-card--image .pu-card__content {
  @apply p-4;
}

.pu-card--actions .pu-card__content {
  @apply p-4 pb-2;
}

.pu-card--small {
  @apply max-w-sm;
}

.pu-card--medium {
  @apply max-w-md;
}

.pu-card--large {
  @apply max-w-lg;
}

.pu-card:hover {
  @apply transform scale-[1.02] shadow-lg;
  box-shadow:
    0 8px 16px rgba(28, 28, 28, 0.15),
    0 4px 8px rgba(28, 28, 28, 0.1);
  filter: drop-shadow(0 4px 8px rgba(28, 28, 28, 0.1));
}

.pu-card {
  animation: cardEnter 0.4s ease-out;
}

@keyframes cardEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dark .pu-card {
  @apply bg-primary-light-600 border-primary-light-400;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark .pu-card::after {
  background:
    radial-gradient(circle at 0 0, transparent 60%, rgba(193, 193, 193, 0.1) 100%);
}

.dark .pu-card:hover {
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

@media (max-width: 640px) {
  .pu-card__content {
    @apply p-3;
  }

  .pu-card__actions {
    @apply p-3 pt-0;
  }
}
</style>
