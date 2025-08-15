<template>
  <div
    class="pu-counter font-patrick"
    :class="[counterClass, customClass]"
  >
    <div class="pu-counter__display">
      <span class="pu-counter__value">{{ displayValue }}</span>
      <span
        v-if="suffix"
        class="pu-counter__suffix"
      >{{ suffix }}</span>
    </div>

    <div
      v-if="showControls"
      class="pu-counter__controls"
    >
      <button
        type="button"
        class="pu-counter__button pu-counter__button--decrease"
        :disabled="disabled || modelValue <= min"
        @click="decrease"
      >
        <svg
          class="pu-counter__button-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      </button>

      <button
        type="button"
        class="pu-counter__button pu-counter__button--increase"
        :disabled="disabled || modelValue >= max"
        @click="increase"
      >
        <svg
          class="pu-counter__button-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    min?: number
    max?: number
    step?: number
    suffix?: string
    showControls?: boolean
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    customClass?: string
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 999,
    step: 1,
    suffix: '',
    showControls: true,
    disabled: false,
    size: 'medium',
    customClass: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
}>()

const displayValue = ref(props.modelValue)

const counterClass = computed(() => [
  'pu-counter',
  `pu-counter--${props.size}`,
  {
    'pu-counter--disabled': props.disabled,
  },
])

const increase = () => {
  if (props.disabled || displayValue.value >= props.max) return

  const newValue = Math.min(props.max, displayValue.value + props.step)
  displayValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const decrease = () => {
  if (props.disabled || displayValue.value <= props.min) return

  const newValue = Math.max(props.min, displayValue.value - props.step)
  displayValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

watch(() => props.modelValue, (newValue) => {
  displayValue.value = newValue
})
</script>

<style lang="css" scoped>
.pu-counter {
  @apply inline-flex items-center gap-3;
}

.pu-counter__display {
  @apply flex items-center gap-1;
}

.pu-counter__value {
  @apply text-2xl font-bold text-primary-light-500 dark:text-primary-light-50;
  text-shadow: 0 2px 4px rgba(28, 28, 28, 0.1);
}

.pu-counter__suffix {
  @apply text-lg text-gray-600 dark:text-primary-light-300 font-medium;
}

.pu-counter__controls {
  @apply flex gap-1;
}

.pu-counter__button {
  @apply relative p-2 rounded-full border-2 border-gray-300 dark:border-primary-light-400 bg-white dark:bg-primary-light-600 cursor-pointer transition-all duration-200;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-counter__button:hover:not(:disabled) {
  @apply transform scale-105;
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.15),
    0 2px 4px rgba(28, 28, 28, 0.1);
}

.pu-counter__button:active:not(:disabled) {
  @apply transform scale-95;
}

.pu-counter__button-icon {
  @apply w-4 h-4 text-gray-600 dark:text-primary-light-300;
}

.pu-counter__button:hover:not(:disabled) .pu-counter__button-icon {
  @apply text-primary-light-500 dark:text-primary-light-50;
}

.pu-counter__button:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.pu-counter__button:disabled:hover {
  @apply transform-none;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-counter--small .pu-counter__value {
  @apply text-lg;
}

.pu-counter--small .pu-counter__suffix {
  @apply text-sm;
}

.pu-counter--small .pu-counter__button {
  @apply p-1.5;
}

.pu-counter--small .pu-counter__button-icon {
  @apply w-3 h-3;
}

.pu-counter--medium .pu-counter__value {
  @apply text-2xl;
}

.pu-counter--medium .pu-counter__suffix {
  @apply text-lg;
}

.pu-counter--medium .pu-counter__button {
  @apply p-2;
}

.pu-counter--medium .pu-counter__button-icon {
  @apply w-4 h-4;
}

.pu-counter--large .pu-counter__value {
  @apply text-3xl;
}

.pu-counter--large .pu-counter__suffix {
  @apply text-xl;
}

.pu-counter--large .pu-counter__button {
  @apply p-3;
}

.pu-counter--large .pu-counter__button-icon {
  @apply w-5 h-5;
}

.pu-counter__button::before {
  content: '';
  @apply absolute inset-0 rounded-full pointer-events-none;
  background:
    radial-gradient(circle at 30% 30%, rgba(28, 28, 28, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(28, 28, 28, 0.05) 0%, transparent 50%);
}

.dark .pu-counter__button::before {
  background:
    radial-gradient(circle at 30% 30%, rgba(193, 193, 193, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(193, 193, 193, 0.05) 0%, transparent 50%);
}

.pu-counter__value {
  animation: counterUpdate 0.3s ease-out;
}

@keyframes counterUpdate {
  0% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.dark .pu-counter__value {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dark .pu-counter__button {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .pu-counter__button:hover:not(:disabled) {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 640px) {
  .pu-counter--large .pu-counter__value {
    @apply text-2xl;
  }

  .pu-counter--large .pu-counter__suffix {
    @apply text-lg;
  }

  .pu-counter--large .pu-counter__button {
    @apply p-2;
  }

  .pu-counter--large .pu-counter__button-icon {
    @apply w-4 h-4;
  }
}
</style>
