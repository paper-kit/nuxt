<template>
  <div class="select-demo-container">
    <CodeBlock v-if="type === 'default'">
      <template #preview>
        <PUSelect
          v-model="demoValue"
          :options="[{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }]"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'placeholder'">
      <template #preview>
        <PUSelect
          v-model="placeholderValue"
          placeholder="Select something"
          :options="[{ value: 'a', label: 'Item A' }, { value: 'b', label: 'Item B' }]"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'sizes'">
      <template #preview>
        <div class="flex gap-2">
          <PUSelect
            v-model="smallValue"
            size="small"
            :options="sizeOptions"
          />
          <PUSelect
            v-model="largeValue"
            size="large"
            :options="sizeOptions"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock v-if="type === 'example-option'">
      <template #preview>
        <PUSelect
          v-model="presetValue"
          :example-option="{ value: 'preset', label: 'Preselected Option' }"
          :options="presetOptions"
        />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
    <CodeBlock v-if="type === 'with-label'">
      <template #preview>
        <div class="flex flex-col">
          <PULabel id="label">
            with label
          </PULabel>
          <PUSelect
            v-model="presetValue"
            placeholder="Choose an option"
            :options="presetOptions"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  type: 'default' | 'placeholder' | 'sizes' | 'example-option' | 'with-label'
}>()

const demoValue = ref()
const placeholderValue = ref()
const smallValue = ref()
const largeValue = ref()
const presetValue = ref()

const sizeOptions = [
  { value: 'sm', label: 'Small' },
  { value: 'lg', label: 'Large' },
]

const presetOptions = [
  { value: 'preset', label: 'Preselected Option' },
  { value: 'opt2', label: 'Regular Option' },
]
</script>
