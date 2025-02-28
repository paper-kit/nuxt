<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    disabled?: boolean
    label?: string
    flavor?: 'normal' | 'outlined'
    width?: 'full' | 'mid'
  }>(),
  {
    disabled: false,
    label: '',
    flavor: 'normal',
    width: 'full',
  },
)

const emit = defineEmits(['update:modelValue'])

const toggleState = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}

const switchClasses = computed(() => {
  const base = 'rounded-full transition-colors duration-300 relative'
  const sizes = {
    full: 'w-11 h-6',
    mid: 'w-8 h-3', // Container menor
  }
  const bgColors = {
    normal: {
      active: 'bg-primary-light-500 dark:bg-white',
      inactive: 'bg-primary-light-300',
    },
    outlined: {
      active: 'bg-primary-light-500 border-2 border-primary-light-500',
      inactive: 'bg-transparent border-2 border-primary-light-500',
    },
  }

  return [
    base,
    sizes[props.width],
    props.modelValue ? bgColors[props.flavor].active : bgColors[props.flavor].inactive,
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ]
})

const thumbClasses = computed(() => {
  const base = 'absolute bg-white rounded-full shadow-sm transform transition-transform duration-300 dark:bg-primary-light-500 dark:border-white'
  const sizes = {
    full: 'w-4 h-4 top-1',
    mid: 'w-5 h-5 -top-1 border border-2 border-primary-light-500', // Thumb maior e posicionado acima do container
  }
  const positions = {
    full: props.modelValue ? 'translate-x-6' : 'translate-x-1',
    mid: props.modelValue ? 'translate-x-4' : '-translate-x-1', // Ajuste de posição para o thumb maior
  }

  return [
    base,
    sizes[props.width],
    positions[props.width],
    props.flavor === 'outlined' && !props.modelValue ? 'border border-primary-light-500' : '',
  ]
})
</script>

<template>
  <div class="inline-flex items-center font-patrick">
    <div
      class="flex items-center gap-3 group"
      :class="{ 'cursor-pointer': !disabled, 'cursor-not-allowed': disabled }"
      @click="toggleState"
    >
      <div :class="switchClasses">
        <div :class="thumbClasses" />
      </div>
      <span
        v-if="label"
        class="text-primary-light-500 transition-opacity select-none dark:text-primary-light-50"
        :class="{
          'text-primary-light-400': disabled,
          'group-hover:opacity-80': !disabled,
        }"
      >
        {{ label }}
      </span>
    </div>
  </div>
</template>
