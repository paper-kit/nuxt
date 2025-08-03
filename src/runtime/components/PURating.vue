<template>
  <div
    class="pu-rating font-patrick"
    :class="[ratingClass, customClass]"
  >
    <div class="pu-rating__stars">
      <button
        v-for="star in maxStars"
        :key="star"
        type="button"
        class="pu-rating__star"
        :class="{ 'pu-rating__star--filled': star <= modelValue }"
        :disabled="disabled || readonly"
        @click="handleStarClick(star)"
        @mouseenter="handleStarHover(star)"
        @mouseleave="handleStarLeave"
      >
        <svg
          class="pu-rating__star-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </button>
    </div>

    <div
      v-if="showValue"
      class="pu-rating__value"
    >
      {{ modelValue }}/{{ maxStars }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    maxStars?: number
    size?: 'small' | 'medium' | 'large'
    readonly?: boolean
    disabled?: boolean
    showValue?: boolean
    customClass?: string
  }>(),
  {
    modelValue: 0,
    maxStars: 5,
    size: 'medium',
    readonly: false,
    disabled: false,
    showValue: false,
    customClass: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
}>()

const hoverValue = ref(0)

const ratingClass = computed(() => [
  'pu-rating',
  `pu-rating--${props.size}`,
  {
    'pu-rating--disabled': props.disabled,
    'pu-rating--readonly': props.readonly,
  },
])

const handleStarClick = (star: number) => {
  if (props.disabled || props.readonly) return

  emit('update:modelValue', star)
  emit('change', star)
}

const handleStarHover = (star: number) => {
  if (props.disabled || props.readonly) return
  hoverValue.value = star
}

const handleStarLeave = () => {
  if (props.disabled || props.readonly) return
  hoverValue.value = 0
}
</script>

<style lang="css" scoped>
.pu-rating {
  @apply inline-flex items-center gap-2;
}

.pu-rating__stars {
  @apply flex gap-1;
}

.pu-rating__star {
  @apply relative p-0 border-none bg-transparent cursor-pointer transition-all duration-200;
}

.pu-rating__star-icon {
  @apply transition-all duration-200;
  filter: drop-shadow(0 1px 2px rgba(28, 28, 28, 0.1));
}

/* Star states */
.pu-rating__star:not(.pu-rating__star--filled) .pu-rating__star-icon {
  @apply text-gray-300 dark:text-primary-light-400;
}

.pu-rating__star--filled .pu-rating__star-icon {
  @apply text-yellow-400 dark:text-yellow-300;
}

/* Hover effects */
.pu-rating__star:hover .pu-rating__star-icon {
  @apply transform scale-110;
  filter: drop-shadow(0 2px 4px rgba(28, 28, 28, 0.15));
}

.pu-rating__star:hover:not(.pu-rating__star--filled) .pu-rating__star-icon {
  @apply text-yellow-300 dark:text-yellow-400;
}

/* Sizes */
.pu-rating--small .pu-rating__star-icon {
  @apply w-4 h-4;
}

.pu-rating--medium .pu-rating__star-icon {
  @apply w-6 h-6;
}

.pu-rating--large .pu-rating__star-icon {
  @apply w-8 h-8;
}

/* Value display */
.pu-rating__value {
  @apply text-sm text-gray-600 dark:text-primary-light-300 font-medium;
}

/* Disabled state */
.pu-rating--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.pu-rating--disabled .pu-rating__star {
  @apply cursor-not-allowed;
}

.pu-rating--disabled .pu-rating__star:hover .pu-rating__star-icon {
  @apply transform-none;
}

/* Readonly state */
.pu-rating--readonly .pu-rating__star {
  @apply cursor-default;
}

.pu-rating--readonly .pu-rating__star:hover .pu-rating__star-icon {
  @apply transform-none;
}

/* Hand-drawn effects */
.pu-rating__star-icon {
  /* Irregular star shape effect */
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

/* Animation for filled stars */
.pu-rating__star--filled .pu-rating__star-icon {
  animation: starFill 0.3s ease-out;
}

@keyframes starFill {
  0% {
    transform: scale(0.8) rotate(-10deg);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

/* Dark mode adjustments */
.dark .pu-rating__star-icon {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.dark .pu-rating__star:hover .pu-rating__star-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

/* Responsive */
@media (max-width: 640px) {
  .pu-rating--large .pu-rating__star-icon {
    @apply w-6 h-6;
  }
}
</style>
