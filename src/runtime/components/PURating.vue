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

        :disabled="disabled || readonly"
        @click="handleStarClick(star)"
        @mouseenter="handleStarHover(star)"
        @mouseleave="handleStarLeave"
      >
        <PUIcon
          :name="getStarIcon(star)"
          class="pu-rating__star-icon"
        />
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

const getStarIcon = (star: number) => {
  const currentValue = hoverValue.value || props.modelValue

  if (star <= currentValue) {
    return 'star-solid'
  }
  if (star - currentValue < 1) {
    return 'star-half-alt'
  }
  return 'star'
}
</script>

<style lang="css" scoped>
.pu-rating {
  @apply inline-flex items-center gap-2;
}

.pu-rating__stars {
  @apply flex;
}

.pu-rating__star {
  @apply relative p-0 border-none bg-transparent cursor-pointer transition-all duration-200;
}

.pu-rating__star-icon {
  @apply transition-all duration-200;
  filter: drop-shadow(0 1px 2px rgba(28, 28, 28, 0.1));
}

.pu-rating__star:hover .pu-rating__star-icon {
  @apply transform scale-110;
  filter: drop-shadow(0 2px 4px rgba(28, 28, 28, 0.15));
}

.pu-rating__star-icon {
  @apply text-primary-light-600 dark:text-primary-light-300;
}

.pu-rating__star:hover .pu-rating__star-icon {
  @apply text-primary-light-800 dark:text-primary-light-100;
}

.pu-rating--small .pu-rating__stars {
  @apply gap-0.5;
}

.pu-rating--small .pu-rating__star-icon {
  @apply w-4 h-4;
}

.pu-rating--medium .pu-rating__stars {
  @apply gap-1;
}

.pu-rating--medium .pu-rating__star-icon {
  @apply w-6 h-6;
}

.pu-rating--large .pu-rating__stars {
  @apply gap-1.5;
}

.pu-rating--large .pu-rating__star-icon {
  @apply w-8 h-8;
}

.pu-rating__value {
  @apply text-primary-light-600 dark:text-primary-light-300 font-medium;
}

.pu-rating--small .pu-rating__value {
  @apply text-xs;
}

.pu-rating--medium .pu-rating__value {
  @apply text-sm;
}

.pu-rating--large .pu-rating__value {
  @apply text-base;
}

.pu-rating--disabled .pu-rating__star {
  @apply cursor-not-allowed;
}

.pu-rating--disabled .pu-rating__star:hover .pu-rating__star-icon {
  @apply transform-none;
}

.pu-rating--readonly .pu-rating__star {
  @apply cursor-default;
}

.pu-rating--readonly .pu-rating__star:hover .pu-rating__star-icon {
  @apply transform-none;
}

.dark .pu-rating__star-icon {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.dark .pu-rating__star:hover .pu-rating__star-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

@media (max-width: 640px) {
  .pu-rating--large .pu-rating__star-icon {
    @apply w-6 h-6;
  }
}
</style>
