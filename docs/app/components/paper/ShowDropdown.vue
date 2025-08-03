<template>
  <div class="dropdown-demo">
    <CodeBlock
      v-if="type === 'basic'"
      :compare="false"
    >
      <template #preview>
        <PUDropdown
          v-model="selectedValue"
          :options="options"
          placeholder="Choose an option"
        />
        <div class="mt-2 text-sm text-gray-600">
          Selected: {{ selectedValue }}
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'sizes'"
      :compare="false"
    >
      <template #preview>
        <div class="space-y-2">
          <PUDropdown
            v-model="selectedValue2"
            :options="options"
            size="small"
            placeholder="Small"
          />
          <PUDropdown
            v-model="selectedValue2"
            :options="options"
            size="medium"
            placeholder="Medium"
          />
          <PUDropdown
            v-model="selectedValue2"
            :options="options"
            size="large"
            placeholder="Large"
          />
        </div>
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </CodeBlock>

    <CodeBlock
      v-if="type === 'disabled'"
      :compare="false"
    >
      <template #preview>
        <PUDropdown
          v-model="selectedValue3"
          :options="options"
          :disabled="true"
          placeholder="Disabled dropdown"
        />
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
  type: 'basic' | 'sizes' | 'disabled'
}>()

const selectedValue = ref('')
const selectedValue2 = ref('')
const selectedValue3 = ref('')

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
]
</script>
