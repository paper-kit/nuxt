<template>
  <div
    class="pu-search font-patrick"
    :class="[searchClass, customClass]"
  >
    <div class="pu-search__container">
      <div class="pu-search__icon">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>

      <input
        ref="inputRef"
        v-model="searchValue"
        type="text"
        class="pu-search__input"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
      >

      <button
        v-if="showClear && searchValue"
        type="button"
        class="pu-search__clear"
        @click="clearSearch"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      <div
        v-if="loading"
        class="pu-search__loading"
      >
        <div class="pu-search__spinner" />
      </div>
    </div>

    <Transition name="suggestions">
      <div
        v-if="showSuggestions && suggestions.length > 0"
        class="pu-search__suggestions"
      >
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="pu-search__suggestion"
          :class="{ 'pu-search__suggestion--highlighted': index === highlightedIndex }"
          @click="selectSuggestion(suggestion)"
          @mouseenter="highlightedIndex = index"
        >
          <div
            v-if="suggestion.icon"
            class="pu-search__suggestion-icon"
          >
            <component :is="suggestion.icon" />
          </div>
          <span class="pu-search__suggestion-text">{{ suggestion.text }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, watch } from 'vue'

interface SearchSuggestion {
  text: string
  value: string
  icon?: string
}

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    suggestions?: SearchSuggestion[]
    loading?: boolean
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    showClear?: boolean
    customClass?: string
  }>(),
  {
    modelValue: '',
    placeholder: 'Search...',
    suggestions: () => [],
    loading: false,
    disabled: false,
    size: 'medium',
    showClear: true,
    customClass: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'search': [value: string]
  'suggestion-select': [suggestion: SearchSuggestion]
  'clear': []
}>()

const searchValue = ref(props.modelValue)
const inputRef = ref<HTMLInputElement>()
const showSuggestions = ref(false)
const highlightedIndex = ref(-1)

const searchClass = computed(() => [
  'pu-search',
  `pu-search--${props.size}`,
  {
    'pu-search--focused': showSuggestions.value,
    'pu-search--disabled': props.disabled,
  },
])

const handleInput = () => {
  emit('update:modelValue', searchValue.value)
  showSuggestions.value = true
  highlightedIndex.value = -1
}

const handleFocus = () => {
  if (props.suggestions.length > 0) {
    showSuggestions.value = true
  }
}

const handleBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false
    highlightedIndex.value = -1
  }, 150)
}

const handleEnter = () => {
  if (highlightedIndex.value >= 0 && props.suggestions[highlightedIndex.value]) {
    selectSuggestion(props.suggestions[highlightedIndex.value])
  }
  else {
    emit('search', searchValue.value)
  }
}

const selectSuggestion = (suggestion: SearchSuggestion) => {
  searchValue.value = suggestion.text
  emit('update:modelValue', suggestion.text)
  emit('suggestion-select', suggestion)
  showSuggestions.value = false
  inputRef.value?.focus()
}

const clearSearch = () => {
  searchValue.value = ''
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

watch(() => props.modelValue, (newValue) => {
  searchValue.value = newValue
})
</script>

<style lang="css" scoped>
.pu-search {
  @apply relative;
}

.pu-search__container {
  @apply relative flex items-center;
}

.pu-search__icon {
  @apply absolute left-3 z-10 w-5 h-5 text-gray-400 dark:text-primary-light-300;
}

.pu-search__input {
  @apply w-full pl-10 pr-10 py-2 bg-white dark:bg-primary-light-600 border border-gray-300 dark:border-primary-light-400 rounded-lg text-sm text-gray-700 dark:text-primary-light-50 placeholder-gray-500 dark:placeholder-primary-light-300 focus:outline-none focus:border-primary-light-500 dark:focus:border-primary-light-50 transition-all duration-200;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-search__input:focus {
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.15),
    0 2px 4px rgba(28, 28, 28, 0.1);
}

.pu-search__clear {
  @apply absolute right-3 z-10 w-5 h-5 text-gray-400 dark:text-primary-light-300 hover:text-gray-600 dark:hover:text-primary-light-50 cursor-pointer transition-colors duration-200;
}

.pu-search__loading {
  @apply absolute right-3 z-10;
}

.pu-search__spinner {
  @apply w-5 h-5 border-2 border-gray-300 dark:border-primary-light-400 border-t-primary-light-500 dark:border-t-primary-light-50 rounded-full animate-spin;
}

.pu-search__suggestions {
  @apply absolute top-full left-0 right-0 mt-1 bg-white dark:bg-primary-light-600 border border-gray-300 dark:border-primary-light-400 rounded-lg shadow-lg z-50;
  box-shadow:
    0 8px 16px rgba(28, 28, 28, 0.15),
    0 4px 8px rgba(28, 28, 28, 0.1);
}

.pu-search__suggestion {
  @apply flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors duration-150;
}

.pu-search__suggestion:hover,
.pu-search__suggestion--highlighted {
  @apply bg-gray-100 dark:bg-primary-light-500;
}

.pu-search__suggestion-icon {
  @apply w-4 h-4 text-gray-500 dark:text-primary-light-300;
}

.pu-search__suggestion-text {
  @apply text-sm text-gray-700 dark:text-primary-light-50;
}

.pu-search--small .pu-search__input {
  @apply py-1.5 text-xs;
}

.pu-search--small .pu-search__icon,
.pu-search--small .pu-search__clear,
.pu-search--small .pu-search__spinner {
  @apply w-4 h-4;
}

.pu-search--small .pu-search__input {
  @apply pl-8 pr-8;
}

.pu-search--medium .pu-search__input {
  @apply py-2 text-sm;
}

.pu-search--medium .pu-search__icon,
.pu-search--medium .pu-search__clear,
.pu-search--medium .pu-search__spinner {
  @apply w-5 h-5;
}

.pu-search--medium .pu-search__input {
  @apply pl-10 pr-10;
}

.pu-search--large .pu-search__input {
  @apply py-3 text-base;
}

.pu-search--large .pu-search__icon,
.pu-search--large .pu-search__clear,
.pu-search--large .pu-search__spinner {
  @apply w-6 h-6;
}

.pu-search--large .pu-search__input {
  @apply pl-12 pr-12;
}

.pu-search--disabled .pu-search__input {
  @apply opacity-50 cursor-not-allowed;
}

.pu-search__input::before {
  content: '';
  @apply absolute inset-0 rounded-lg pointer-events-none;
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(28, 28, 28, 0.05) 50%,
      transparent 70%);
}

.dark .pu-search__input::before {
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(193, 193, 193, 0.05) 50%,
      transparent 70%);
}

.suggestions-enter-active,
.suggestions-leave-active {
  transition: all 0.2s ease-out;
}

.suggestions-enter-from,
.suggestions-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.dark .pu-search__suggestions {
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 640px) {
  .pu-search--large .pu-search__input {
    @apply py-2 text-sm;
  }

  .pu-search--large .pu-search__icon,
  .pu-search--large .pu-search__clear,
  .pu-search--large .pu-search__spinner {
    @apply w-5 h-5;
  }

  .pu-search--large .pu-search__input {
    @apply pl-10 pr-10;
  }
}
</style>
