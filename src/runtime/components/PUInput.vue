<template>
  <div class="pu-input">
    <label :for="id">
      <PUIcon
        v-if="iconLeft"
        :name="iconLeft"
      />
    </label>
    <input
      :id="id"
      v-model="value"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder"
      class="pu-input--default"
      @update:modelValue="updateValue"
      @blur="handleBlur"
      @keydown.enter="handleEnter"
    >
    <label :for="id">
      <PUIcon
        v-if="iconRight"
        :name="iconRight"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  disabled?: boolean
  placeholder?: string
  id?: string
  iconLeft?: string
  iconRight?: string
  modelValue: string | number | null
}>()

const value = ref(null)

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | null): void
}>()

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleEnter = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    emit('update:modelValue', value.value)
  }
  e.preventDefault()
}

const handleBlur = () => {
  emit('update:modelValue', value.value)
}
</script>

<style scoped>
.pu-input {
  @apply relative  flex items-center  gap-2 w-full p-2;
  @apply border-2 border-primary-light-500 rounded-lg;
  @apply transition-all duration-150 ease-in-out;
}

.pu-input--default {
  @apply text-gray-800 text-base w-full;
  @apply focus:outline-none;
}

.pu-input:focus {
  @apply border-8;
}

.pu-input::placeholder {
  @apply text-primary-light-300 text-sm;
}
</style>
