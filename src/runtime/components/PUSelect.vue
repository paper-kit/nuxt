<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue'

type Option = {
  value: string | number
  label: string
}

// Propriedades recebidas pelo componente
const props = defineProps<{
  options: Option[] // Lista de opções
  modelValue: string | number | null // Valor selecionado
  placeholder?: string // Placeholder opcional
  size?: 'small' | 'large' // Tamanho do select
  exampleOption?: Option // Opção de exemplo a ser exibida inicialmente
}>()

// Emitir eventos para o componente pai
const emit = defineEmits(['update:modelValue'])

// Controle interno do valor selecionado
const selectedValue = ref<string | number | null>(null)

onMounted(() => {
  // Definir o valor inicial como o exemplo, se fornecido
  if (props.exampleOption) {
    selectedValue.value = props.exampleOption.value
    emit('update:modelValue', props.exampleOption.value)
  }
})

// Atualizar o valor quando o usuário selecionar uma nova opção
const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  selectedValue.value = target.value
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="relative w-full">
    <select
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
    <span class="absolute inset-y-0 right-2 flex items-center pr-2 pointer-events-none">
      <PUIcon
        name="arrow-down"
        custom-class="text-primary-light-500"
      />
    </span>
  </div>
</template>

<style scoped>

</style>
