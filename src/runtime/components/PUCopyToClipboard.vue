<template>
  <div
    class="pu-copy font-patrick"
    :class="[copyClass, customClass]"
  >
    <button
      type="button"
      class="pu-copy__button"
      :disabled="disabled"
      @click="copyToClipboard"
    >
      <svg
        v-if="!copied"
        class="pu-copy__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
      <svg
        v-else
        class="pu-copy__icon pu-copy__icon--success"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
      <span class="pu-copy__text">{{ copied ? successText : text }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    text?: string
    value?: string
    successText?: string
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    customClass?: string
  }>(),
  {
    text: 'Copy',
    value: '',
    successText: 'Copied!',
    disabled: false,
    size: 'medium',
    customClass: '',
  },
)

const emit = defineEmits<{
  copy: [value: string]
  success: [value: string]
  error: [error: Error]
}>()

const copied = ref(false)

const copyClass = computed(() => [
  'pu-copy',
  `pu-copy--${props.size}`,
  {
    'pu-copy--copied': copied.value,
    'pu-copy--disabled': props.disabled,
  },
])

const copyToClipboard = async () => {
  if (props.disabled) return

  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    emit('copy', props.value)
    emit('success', props.value)

    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
  catch (error) {
    emit('error', error as Error)
  }
}
</script>

<style lang="css" scoped>
.pu-copy {
  @apply inline-block;
}

.pu-copy__button {
  @apply flex items-center gap-2 px-3 py-2 bg-white dark:bg-primary-light-600 border border-gray-300 dark:border-primary-light-400 rounded-lg cursor-pointer transition-all duration-200;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-copy__button:hover:not(:disabled) {
  @apply border-primary-light-500 dark:border-primary-light-50;
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.15),
    0 2px 4px rgba(28, 28, 28, 0.1);
}

.pu-copy__button:active:not(:disabled) {
  @apply transform scale-95;
}

.pu-copy__icon {
  @apply w-4 h-4 text-gray-600 dark:text-primary-light-300 transition-all duration-200;
}

.pu-copy__icon--success {
  @apply text-green-500 dark:text-green-400;
}

.pu-copy__text {
  @apply text-sm text-gray-700 dark:text-primary-light-50 font-medium;
}

.pu-copy--small .pu-copy__button {
  @apply px-2 py-1.5;
}

.pu-copy--small .pu-copy__icon {
  @apply w-3 h-3;
}

.pu-copy--small .pu-copy__text {
  @apply text-xs;
}

.pu-copy--medium .pu-copy__button {
  @apply px-3 py-2;
}

.pu-copy--medium .pu-copy__icon {
  @apply w-4 h-4;
}

.pu-copy--medium .pu-copy__text {
  @apply text-sm;
}

.pu-copy--large .pu-copy__button {
  @apply px-4 py-3;
}

.pu-copy--large .pu-copy__icon {
  @apply w-5 h-5;
}

.pu-copy--large .pu-copy__text {
  @apply text-base;
}

.pu-copy--disabled .pu-copy__button {
  @apply opacity-50 cursor-not-allowed;
}

.pu-copy--disabled .pu-copy__button:hover {
  @apply border-gray-300 dark:border-primary-light-400;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-copy__button::before {
  content: '';
  @apply absolute inset-0 rounded-lg pointer-events-none;
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(28, 28, 28, 0.05) 50%,
      transparent 70%);
}

.dark .pu-copy__button::before {
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(193, 193, 193, 0.05) 50%,
      transparent 70%);
}

.pu-copy--copied .pu-copy__icon {
  animation: copySuccess 0.3s ease-out;
}

@keyframes copySuccess {
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

.dark .pu-copy__button {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .pu-copy__button:hover:not(:disabled) {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
}

@media (max-width: 640px) {
  .pu-copy--large .pu-copy__button {
    @apply px-3 py-2;
  }

  .pu-copy--large .pu-copy__icon {
    @apply w-4 h-4;
  }

  .pu-copy--large .pu-copy__text {
    @apply text-sm;
  }
}
</style>
