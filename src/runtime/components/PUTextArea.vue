<template>
  <div class="pu-textarea">
    <textarea
      :id="id"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
      type="text"
      class="pu-textarea--default"
      @update:modelValue="updateValue"
      @blur="handleBlur"
      @keydown.enter="handleEnter"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean
  placeholder?: string
  id?: string
  modelValue: string | number | null
}>()

const value = ref(null)

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | null): void
}>()

const updateValue = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
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
.pu-textarea--default {
  @apply w-full p-2;
  @apply border-2 border-primary-light-500 rounded-lg;
  @apply text-gray-800 text-base;
  @apply focus:outline-none;
}
</style>
