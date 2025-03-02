<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue'

type Option = {
  value: string | number
  label: string
}

const props = defineProps<{
  options: Option[]
  modelValue: string | number | null
  placeholder?: string
  size?: 'small' | 'large'
  id?: string
  exampleOption?: Option
}>()

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref<string | number | null>(null)

onMounted(() => {
  if (props.exampleOption) {
    selectedValue.value = props.exampleOption.value
    emit('update:modelValue', props.exampleOption.value)
  }
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  selectedValue.value = target.value
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="relative w-full font-patrick">
    <select
      :id="id"
      :class="`py-2 ${size === 'small' ? 'text-sm' : 'text-base'}`"
      :placeholder="placeholder"
      class="appearance-none cursor-pointer border rounded-lg px-4 py-2 text-primary-light-500 bg-white focus:outline-none ring-2 ring-primary-light-500 w-full"
      :value="selectedValue"
      @change="handleChange"
    >
      <option
        value=""
        disabled
        hidden
      >
        {{ placeholder || 'Select' }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="hover:bg-primary-light-500"
      >
        {{ option.label }}
      </option>
    </select>
    <span
      :class="`text-${size === 'small' ? 'sm ' : 'base'} text-primary-light-500`"
      class="absolute inset-y-0 right-2 flex items-center pr-2 pointer-events-none"
    >
      <PUIcon
        name="chevron-down"
        custom-class="text-primary-light-500"
      />
    </span>
  </div>
</template>

<style scoped>

</style>
