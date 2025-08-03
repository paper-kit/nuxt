<template>
  <div
    class="pu-dropdown font-patrick"
    :class="[dropdownClass, customClass]"
  >
    <button
      ref="triggerRef"
      type="button"
      class="pu-dropdown__trigger"
      :disabled="disabled"
      @click="toggleDropdown"
    >
      <span class="pu-dropdown__trigger-text">{{ selectedLabel || placeholder }}</span>
      <svg
        class="pu-dropdown__trigger-icon"
        :class="{ 'pu-dropdown__trigger-icon--open': isOpen }"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="pu-dropdown__menu"
        :style="menuStyle"
      >
        <div class="pu-dropdown__menu-content">
          <div
            v-for="option in options"
            :key="option.value"
            class="pu-dropdown__option"
            :class="{ 'pu-dropdown__option--selected': option.value === modelValue }"
            @click="selectOption(option)"
          >
            <div
              v-if="option.icon"
              class="pu-dropdown__option-icon"
            >
              <component :is="option.icon" />
            </div>
            <span class="pu-dropdown__option-label">{{ option.label }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, onMounted, onUnmounted } from 'vue'

interface DropdownOption {
  value: string | number
  label: string
  icon?: string
}

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    options?: DropdownOption[]
    placeholder?: string
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    customClass?: string
  }>(),
  {
    modelValue: '',
    options: () => [],
    placeholder: 'Select an option',
    disabled: false,
    size: 'medium',
    customClass: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'change': [value: string | number]
}>()

const isOpen = ref(false)
const triggerRef = ref<HTMLElement>()
const menuRef = ref<HTMLElement>()

const dropdownClass = computed(() => [
  'pu-dropdown',
  `pu-dropdown--${props.size}`,
  {
    'pu-dropdown--open': isOpen.value,
    'pu-dropdown--disabled': props.disabled,
  },
])

const selectedLabel = computed(() => {
  const selected = props.options.find(option => option.value === props.modelValue)
  return selected?.label
})

const menuStyle = computed(() => {
  if (!triggerRef.value) return {}

  const rect = triggerRef.value.getBoundingClientRect()
  return {
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    minWidth: `${rect.width}px`,
  }
})

const toggleDropdown = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

const selectOption = (option: DropdownOption) => {
  emit('update:modelValue', option.value)
  emit('change', option.value)
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (
    triggerRef.value
    && menuRef.value
    && !triggerRef.value.contains(event.target as Node)
    && !menuRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="css" scoped>
.pu-dropdown {
  @apply relative inline-block;
}

.pu-dropdown__trigger {
  @apply flex items-center justify-between w-full px-3 py-2 bg-white dark:bg-primary-light-600 border border-gray-300 dark:border-primary-light-400 rounded-lg cursor-pointer transition-all duration-200;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

.pu-dropdown__trigger:hover:not(:disabled) {
  @apply border-primary-light-500 dark:border-primary-light-50;
  box-shadow:
    0 4px 8px rgba(28, 28, 28, 0.15),
    0 2px 4px rgba(28, 28, 28, 0.1);
}

.pu-dropdown__trigger-text {
  @apply text-sm text-gray-700 dark:text-primary-light-50;
}

.pu-dropdown__trigger-icon {
  @apply w-4 h-4 text-gray-500 dark:text-primary-light-300 transition-transform duration-200;
}

.pu-dropdown__trigger-icon--open {
  @apply transform rotate-180;
}

/* Menu */
.pu-dropdown__menu {
  @apply absolute z-50 bg-white dark:bg-primary-light-600 border border-gray-300 dark:border-primary-light-400 rounded-lg shadow-lg;
  box-shadow:
    0 8px 16px rgba(28, 28, 28, 0.15),
    0 4px 8px rgba(28, 28, 28, 0.1);
}

.pu-dropdown__menu-content {
  @apply py-1;
}

.pu-dropdown__option {
  @apply flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors duration-150;
}

.pu-dropdown__option:hover {
  @apply bg-gray-100 dark:bg-primary-light-500;
}

.pu-dropdown__option--selected {
  @apply bg-primary-light-100 dark:bg-primary-light-500 text-primary-light-700 dark:text-primary-light-50;
}

.pu-dropdown__option-icon {
  @apply w-4 h-4;
}

.pu-dropdown__option-label {
  @apply text-sm;
}

/* Sizes */
.pu-dropdown--small .pu-dropdown__trigger {
  @apply px-2 py-1.5;
}

.pu-dropdown--small .pu-dropdown__trigger-text {
  @apply text-xs;
}

.pu-dropdown--small .pu-dropdown__trigger-icon {
  @apply w-3 h-3;
}

.pu-dropdown--medium .pu-dropdown__trigger {
  @apply px-3 py-2;
}

.pu-dropdown--medium .pu-dropdown__trigger-text {
  @apply text-sm;
}

.pu-dropdown--medium .pu-dropdown__trigger-icon {
  @apply w-4 h-4;
}

.pu-dropdown--large .pu-dropdown__trigger {
  @apply px-4 py-3;
}

.pu-dropdown--large .pu-dropdown__trigger-text {
  @apply text-base;
}

.pu-dropdown--large .pu-dropdown__trigger-icon {
  @apply w-5 h-5;
}

/* Disabled state */
.pu-dropdown--disabled .pu-dropdown__trigger {
  @apply opacity-50 cursor-not-allowed;
}

.pu-dropdown--disabled .pu-dropdown__trigger:hover {
  @apply border-gray-300 dark:border-primary-light-400;
  box-shadow:
    0 2px 4px rgba(28, 28, 28, 0.1),
    0 1px 2px rgba(28, 28, 28, 0.05);
}

/* Hand-drawn effects */
.pu-dropdown__trigger::before {
  content: '';
  @apply absolute inset-0 rounded-lg pointer-events-none;
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(28, 28, 28, 0.05) 50%,
      transparent 70%);
}

.dark .pu-dropdown__trigger::before {
  background:
    linear-gradient(45deg,
      transparent 30%,
      rgba(193, 193, 193, 0.05) 50%,
      transparent 70%);
}

/* Animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

/* Dark mode adjustments */
.dark .pu-dropdown__menu {
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 640px) {
  .pu-dropdown__menu {
    @apply w-full;
    left: 0 !important;
    min-width: 100% !important;
  }
}
</style>
