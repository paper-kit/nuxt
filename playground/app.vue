<template>
  <div class="w-48 p-4">
    <PUSelect
      :options="options"
      :model-value="selectedValue"
      placeholder="Select an option"
      size="large"
      :example-option="{ value: 1, label: 'Example Item' }"
      @update:model-value="handleModelValueUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import PUSelect from '../src/runtime/components/PUSelect.vue'

// Opções para o dropdown
const options = [
  { value: 1, label: 'Example Item' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
]

// Controle do valor selecionado
const selectedValue = ref<string | number | null>(null)

// Função para atualizar o valor selecionado
const handleModelValueUpdate = (value: string | number | null) => {
  selectedValue.value = value
}
</script>
